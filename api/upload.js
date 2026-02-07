import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  const today = new Date().toISOString().slice(0, 10);
  await redis.incr(`uploads:${today}`);
  res.json({ ok: true });
}
