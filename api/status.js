import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

function dayOffset(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().slice(0, 10);
}

export default async function handler(req, res) {
  const days = [0, 1, 3, 7, 30];

  const visitors = {};
  const uploads = {};

  for (const d of days) {
    const date = dayOffset(d);
    visitors[d === 0 ? "today" : `d${d}`] =
      Number(await redis.get(`visitors:${date}`)) || 0;

    uploads[d === 0 ? "today" : `d${d}`] =
      Number(await redis.get(`uploads:${date}`)) || 0;
  }

  res.json({
    status: "ONLINE",
    visitors,
    uploads
  });
}
