import { kv } from "@vercel/kv";

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

export default async function handler(req, res) {
  try {
    const day = todayKey();
    await kv.incr(`visitors:${day}`);
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false });
  }
}
