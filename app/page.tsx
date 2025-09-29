"use client";

import { useMemo, useRef, useState } from "react";
import { withAuthenticator, WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { ThemeProvider, Theme } from "@aws-amplify/ui-react";
import awsExports from "../aws-exports";
import { uploadData } from "aws-amplify/storage";
import {
  Plus,
  MessageSquare,
  Users2,
  Settings,
  Phone,
  Search,
  MoreVertical,
  Paperclip,
  Smile,
  Send,
  LogOut,
} from "lucide-react";

type ChatContact = {
  id: string;
  name: string;
  avatarUrl?: string;
  lastMessage: string;
  time: string;
};

type ChatMessage = {
  id: string;
  author: "me" | "them";
  text?: string;
  fileName?: string;
  time: string;
};

const myTheme: Theme = {
  name: "my-theme",
  tokens: {
    colors: {
      brand: {
        primary: { value: "#22c55e" },
        secondary: { value: "#111827" },
      },
    },
  },
};

function classNames(...list: (string | false | undefined)[]) {
  return list.filter(Boolean).join(" ");
}

function Home({ user, signOut }: WithAuthenticatorProps) {
  const contacts: ChatContact[] = useMemo(
    () => [
      {
        id: "askcv",
        name: "AskCV",
        avatarUrl: undefined,
        lastMessage: "Upload resumes to analyze candidates.",
        time: "",
      },
      {
        id: "askjd",
        name: "AskJD",
        avatarUrl: undefined,
        lastMessage: "Upload jobs to extract requirements.",
        time: "",
      },
      {
        id: "askit",
        name: "AskIT",
        avatarUrl: undefined,
        lastMessage: "Upload chat issue docs for troubleshooting.",
        time: "",
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState<string>(contacts[0]?.id ?? "");
  const [messagesByContact, setMessagesByContact] = useState<Record<string, ChatMessage[]>>({
    askcv: [
      { id: "m1", author: "them", text: "Hi, upload resumes to begin.", time: "" },
    ],
    askjd: [
      { id: "m1", author: "them", text: "Hi, upload job descriptions.", time: "" },
    ],
    askit: [
      { id: "m1", author: "them", text: "Hi, upload error issue files.", time: "" },
    ],
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [draft, setDraft] = useState<string>("");

  const activeContact = contacts.find((c) => c.id === activeId);
  const messages = messagesByContact[activeId] ?? [];
  const userId: string = (user as any)?.attributes?.sub || (user as any)?.username || "anonymous";
  const bucketName: string = (awsExports as any)?.aws_user_files_s3_bucket || "";
  const publicPrefix = "public/";

  async function handleSend() {
    const trimmed = draft.trim();
    if (!trimmed) return;
    const outMsg: ChatMessage = {
      id: `${Date.now()}`,
      author: "me",
      text: trimmed,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessagesByContact((prev) => ({
      ...prev,
      [activeId]: [...(prev[activeId] ?? []), outMsg],
    }));
    setDraft("");
    inputRef.current?.focus();

    // Typing indicator
    const typingId = `typing-${Date.now()}`;
    setMessagesByContact((prev) => ({
      ...prev,
      [activeId]: [
        ...(prev[activeId] ?? []),
        { id: typingId, author: "them", text: "…", time: "" },
      ],
    }));

    try {
      // Only AskCV triggers resume Q&A query
      if (activeId === "askcv") {
        const resp = await fetch("https://resume-query-api.onrender.com/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_id: userId, question: trimmed }),
        });
        const data = await resp.json();
        const answer = data?.answer ?? JSON.stringify(data);
        setMessagesByContact((prev) => ({
          ...prev,
          [activeId]: [
            ...(prev[activeId] ?? []).filter((m) => m.id !== typingId),
            { id: `${Date.now()}-ans`, author: "them", text: String(answer), time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
          ],
        }));
      } else {
        // For other bots, just remove typing after delay
        await new Promise((r) => setTimeout(r, 600));
        setMessagesByContact((prev) => ({
          ...prev,
          [activeId]: (prev[activeId] ?? []).filter((m) => m.id !== typingId),
        }));
      }
    } catch (e) {
      setMessagesByContact((prev) => ({
        ...prev,
        [activeId]: [
          ...(prev[activeId] ?? []).filter((m) => m.id !== typingId),
          { id: `${Date.now()}-err`, author: "them", text: `Error: ${String(e)}`, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
        ],
      }));
    }
  }

  type UploadStatus = { id: string; name: string; progress: number; status: "pending" | "uploading" | "success" | "error"; error?: string };
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploads, setUploads] = useState<UploadStatus[]>([]);

  function getPrefixForActive(): string {
    if (activeId === "askcv") return "cv/";
    if (activeId === "askjd") return "jd/";
    return "it/";
  }

  function getAcceptForActive(): string {
    if (activeId === "askcv") return ".pdf,.doc,.docx,.txt,.rtf";
    if (activeId === "askjd") return ".pdf,.doc,.docx,.txt,.rtf";
    return ".pdf,.txt,.md,.log,.doc,.docx";
  }

  async function handleUploadFiles(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) return;
    const files = Array.from(fileList);
    const base = files.map((f) => ({ id: `${Date.now()}-${f.name}`, name: f.name, progress: 0, status: "pending" as const }));
    setUploads(base);
    setShowUploadModal(true);
    const prefix = getPrefixForActive();

    for (const file of files) {
      const timestamp = Date.now();
      const uniqueName = `${timestamp}-${file.name}`;
      const id = `${timestamp}-${file.name}`;
      setUploads((prev) => prev.map((u) => (u.name === file.name ? { ...u, status: "uploading" } : u)));
      try {
        const key = `${prefix}${uniqueName}`; // logical key without 'public/'
        await uploadData({
          key,
          data: file,
          options: {
            accessLevel: "guest",
            contentType: file.type || "application/octet-stream",
            onProgress: ({ transferredBytes, totalBytes }) => {
              if (!totalBytes) return;
              const pct = Math.round((transferredBytes / totalBytes) * 100);
              setUploads((prev) => prev.map((u) => (u.name === file.name ? { ...u, progress: pct } : u)));
            },
          },
        }).result;

        setUploads((prev) => prev.map((u) => (u.name === file.name ? { ...u, status: "success", progress: 100 } : u)));
        const newMsg: ChatMessage = {
          id,
          author: "me",
          fileName: uniqueName,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessagesByContact((prev) => ({
          ...prev,
          [activeId]: [...(prev[activeId] ?? []), newMsg],
        }));

        // Post-upload processing for AskCV: parse then ingest
        if (activeId === "askcv") {
          try {
            const fileKeyForApi = `${publicPrefix}${key}`;
            // simple retry for S3 eventual consistency
            let parseJson: any = null;
            let lastErr: any = null;
            for (let attempt = 0; attempt < 3; attempt++) {
              try {
                const parseRes = await fetch("https://resume-parser-amplify.onrender.com/parse", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    userId: userId,
                    bucketName: bucketName,
                    fileKey: fileKeyForApi,
                    mimeType: file.type || "application/octet-stream",
                  }),
                });
                if (!parseRes.ok) throw new Error(`Parse API ${parseRes.status}`);
                parseJson = await parseRes.json();
                lastErr = null;
                break;
              } catch (e) {
                lastErr = e;
                await new Promise((r) => setTimeout(r, 800));
              }
            }
            if (lastErr) throw lastErr;
            const parsedData = parseJson?.parsedData ?? {};
            const resumeText = typeof parsedData === "string" ? parsedData : JSON.stringify(parsedData);
            await fetch("https://resume-query-api.onrender.com/ingest", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ user_id: userId, resume_text: resumeText }),
            });
          } catch (apiErr) {
            // reflect error status in modal list
            setUploads((prev) => prev.map((u) => (u.name === file.name ? { ...u, status: "error", error: String(apiErr) } : u)));
          }
        }
      } catch (err: any) {
        setUploads((prev) => prev.map((u) => (u.name === file.name ? { ...u, status: "error", error: String(err) } : u)));
      }
    }
  }

  return (
    <ThemeProvider theme={myTheme}>
      <main className="min-h-screen bg-zinc-900 text-zinc-100">
        <div className="h-[100vh] mx-auto max-w-[1400px] grid grid-cols-[72px_360px_1fr] bg-zinc-800">
          {/* Column 1: Narrow sidebar */}
          <aside className="flex flex-col items-center justify-between border-r border-zinc-700 py-4">
            <div className="flex flex-col gap-4">
              <button className="size-11 rounded-full bg-zinc-700 hover:bg-zinc-600 grid place-items-center">
                <MessageSquare className="size-5" />
              </button>
              <button className="size-11 rounded-full bg-zinc-700 hover:bg-zinc-600 grid place-items-center">
                <Users2 className="size-5" />
              </button>
              <button className="size-11 rounded-full bg-zinc-700 hover:bg-zinc-600 grid place-items-center">
                <Phone className="size-5" />
              </button>
              <button className="size-11 rounded-full bg-zinc-700 hover:bg-zinc-600 grid place-items-center">
                <Settings className="size-5" />
              </button>
            </div>
            <div className="mt-auto flex flex-col items-center gap-3">
          <button
                className="size-11 rounded-full bg-red-600/90 hover:bg-red-600 grid place-items-center"
                title="Logout"
            onClick={signOut}
              >
                <LogOut className="size-5" />
              </button>
              <div className="size-11 rounded-full overflow-hidden border-2 border-emerald-500">
                {/* Profile image bottom */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="You"
                  src={(user as any)?.attributes?.picture || "/vercel.svg"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </aside>

          {/* Column 2: Chats list */}
          <section className="flex flex-col border-r border-zinc-700">
            <div className="h-14 flex items-center gap-2 px-3 border-b border-zinc-700">
              <div className="relative flex-1">
                <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  className="w-full bg-zinc-700/60 rounded-full pl-9 pr-3 py-2 outline-none placeholder:text-zinc-400"
                  placeholder="Search or start new chat"
                />
              </div>
              <button className="size-9 grid place-items-center rounded-full hover:bg-zinc-700">
                <MoreVertical className="size-4" />
              </button>
            </div>
            <div className="overflow-y-auto">
              {contacts.map((c) => {
                const isActive = c.id === activeId;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveId(c.id)}
                    className={classNames(
                      "w-full flex items-center gap-3 px-3 py-3 border-b border-zinc-700/70 hover:bg-zinc-700/40",
                      isActive && "bg-zinc-700/60"
                    )}
                  >
                    <div className="size-11 rounded-full overflow-hidden bg-zinc-600 grid place-items-center text-sm font-semibold">
                      <span>{c.name.substring(0, 2)}</span>
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold truncate">{c.name}</p>
                        {c.time && <span className="text-xs text-zinc-400 ml-2">{c.time}</span>}
                      </div>
                      <p className="text-sm text-zinc-300 truncate">{c.lastMessage}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Column 3: Chat window */}
          <section className="flex flex-col">
            {/* Chat header */}
            <div className="h-14 flex items-center gap-3 px-4 border-b border-zinc-700">
              <div className="size-10 rounded-full overflow-hidden bg-zinc-600 grid place-items-center text-sm font-semibold">
                {activeContact?.avatarUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={activeContact.avatarUrl} alt={activeContact.name} className="w-full h-full object-cover" />
                ) : (
                  <span>{activeContact?.name.split(" ").map((p) => p[0]).join("")}</span>
                )}
              </div>
              <div className="flex-1">
                <p className="font-semibold leading-4">{activeContact?.name}</p>
                <p className="text-xs text-zinc-400 leading-4">online</p>
              </div>
              <button className="size-9 grid place-items-center rounded-full hover:bg-zinc-700">
                <Phone className="size-4" />
              </button>
              <button className="size-9 grid place-items-center rounded-full hover:bg-zinc-700">
                <MoreVertical className="size-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-zinc-800 bg-cover/30 bg-center p-4">
              <div className="max-w-3xl mx-auto flex flex-col gap-2">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={classNames(
                      "max-w-[75%] rounded-lg px-3 py-2 text-sm",
                      m.author === "me"
                        ? "self-end bg-emerald-600 text-white"
                        : "self-start bg-zinc-700 text-zinc-100"
                    )}
                  >
                    {m.text === "…" ? (
                      <div className="flex items-center gap-1 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-pulse" />
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-pulse [animation-delay:150ms]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-pulse [animation-delay:300ms]" />
                      </div>
                    ) : (
                      m.text && <p className="whitespace-pre-wrap">{m.text}</p>
                    )}
                    {m.fileName && (
                      <div className="flex items-center gap-2">
                        <Paperclip className="size-4" />
                        <span className="underline">{m.fileName}</span>
                      </div>
                    )}
                    <div className="text-[10px] opacity-70 mt-1 text-right">{m.time}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-zinc-700 p-3">
              <div className="max-w-3xl mx-auto flex items-center gap-2">
                <input
                  type="file"
                  ref={fileRef}
                  className="hidden"
                  accept={getAcceptForActive()}
                  multiple
                  onChange={(e) => {
                    handleUploadFiles(e.target.files);
                    if (fileRef.current) fileRef.current.value = "";
                  }}
                />
                <button
                  className="size-10 grid place-items-center rounded-full bg-zinc-700 hover:bg-zinc-600"
                  onClick={() => fileRef.current?.click()}
                  title="Upload CV"
                >
                  <Plus className="size-5" />
                </button>
                <div className="flex-1 relative">
                  <Smile className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    ref={inputRef}
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    placeholder="Type a message"
                    className="w-full bg-zinc-700 rounded-full pl-9 pr-14 py-3 outline-none placeholder:text-zinc-400"
                  />
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 size-9 grid place-items-center rounded-full bg-emerald-600 hover:bg-emerald-500"
                    onClick={handleSend}
                    title="Send"
                  >
                    <Send className="size-4" />
          </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/60 grid place-items-center p-4 z-50">
          <div className="w-full max-w-xl bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 h-12 border-b border-zinc-700">
              <p className="font-semibold">Uploading files</p>
              <button className="text-zinc-300 hover:text-white text-sm" onClick={() => setShowUploadModal(false)}>Close</button>
            </div>
            <div className="p-4 max-h-[60vh] overflow-y-auto space-y-3">
              {uploads.length === 0 && <p className="text-sm text-zinc-400">No files queued.</p>}
              {uploads.map((u) => (
                <div key={u.id} className="bg-zinc-700/60 rounded-md p-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{u.name}</span>
                    <span className="text-zinc-300">
                      {u.status === "uploading" && `${u.progress}%`}
                      {u.status === "success" && "Done"}
                      {u.status === "error" && "Failed"}
                    </span>
                  </div>
                  <div className="h-2 bg-zinc-600 rounded mt-2 overflow-hidden">
                    <div
                      className={`h-full ${u.status === "error" ? "bg-red-500" : "bg-emerald-500"}`}
                      style={{ width: `${u.progress}%` }}
                    />
                  </div>
                  {u.status === "error" && (
                    <p className="text-xs text-red-400 mt-1">{u.error}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </ThemeProvider>
  );
}

export default withAuthenticator(Home);
