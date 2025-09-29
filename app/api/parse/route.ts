export async function POST(req: Request) {
  try {
    const body = await req.json();
    const resp = await fetch("https://resume-parser-amplify.onrender.com/parse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      // External APIs must be reachable from server; no credentials forwarded
    });
    const text = await resp.text();
    return new Response(text, {
      status: resp.status,
      headers: { "Content-Type": resp.headers.get("content-type") || "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), { status: 500 });
  }
}


