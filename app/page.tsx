"use client";

import { useMemo, useRef, useState } from "react";
import { withAuthenticator, WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { ThemeProvider, Theme } from "@aws-amplify/ui-react";
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
        id: "1",
        name: "Alice Johnson",
        avatarUrl: undefined,
        lastMessage: "Can you share your latest CV?",
        time: "10:12",
      },
      {
        id: "2",
        name: "Bob Recruiter",
        avatarUrl: undefined,
        lastMessage: "Let's schedule an interview.",
        time: "09:40",
      },
      {
        id: "3",
        name: "Tech HR",
        avatarUrl: undefined,
        lastMessage: "We received your application.",
        time: "Yesterday",
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState<string>(contacts[0]?.id ?? "");
  const [messagesByContact, setMessagesByContact] = useState<Record<string, ChatMessage[]>>({
    "1": [
      { id: "m1", author: "them", text: "Hi!", time: "10:10" },
      { id: "m2", author: "me", text: "Hello Alice", time: "10:11" },
    ],
    "2": [
      { id: "m1", author: "them", text: "When are you free?", time: "09:38" },
    ],
    "3": [
      { id: "m1", author: "them", text: "We will get back to you soon.", time: "Yesterday" },
    ],
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [draft, setDraft] = useState<string>("");

  const activeContact = contacts.find((c) => c.id === activeId);
  const messages = messagesByContact[activeId] ?? [];

  function handleSend() {
    const trimmed = draft.trim();
    if (!trimmed) return;
    const newMsg: ChatMessage = {
      id: `${Date.now()}`,
      author: "me",
      text: trimmed,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessagesByContact((prev) => ({
      ...prev,
      [activeId]: [...(prev[activeId] ?? []), newMsg],
    }));
    setDraft("");
    inputRef.current?.focus();
  }

  function handleUpload(file: File) {
    const newMsg: ChatMessage = {
      id: `${Date.now()}-file`,
      author: "me",
      fileName: file.name,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessagesByContact((prev) => ({
      ...prev,
      [activeId]: [...(prev[activeId] ?? []), newMsg],
    }));
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
                      {c.avatarUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={c.avatarUrl} alt={c.name} className="w-full h-full object-cover" />
                      ) : (
                        <span>{c.name.split(" ").map((p) => p[0]).join("")}</span>
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold truncate">{c.name}</p>
                        <span className="text-xs text-zinc-400 ml-2">{c.time}</span>
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
            <div className="flex-1 overflow-y-auto bg-[url('/window.svg')] bg-cover/30 bg-center p-4">
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
                    {m.text && <p className="whitespace-pre-wrap">{m.text}</p>}
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
                  accept=".pdf,.doc,.docx,.txt,.rtf"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleUpload(file);
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
    </ThemeProvider>
  );
}

export default withAuthenticator(Home);
