let start = Date.now();
let totalVisitors = 1200;

export default function handler(req, res) {
  // demo increment ringan
  if (Math.random() < 0.65) totalVisitors++;

  const uptime = Math.floor((Date.now() - start) / 1000);
  const activeNow = Math.floor(Math.random() * 8) + 3;
  const uploadsToday = Math.floor(Math.random() * 20) + 10;
  const errorsToday = Math.floor(Math.random() * 3);

  res.status(200).json({
    status: "ONLINE",
    totalVisitors,
    activeNow,
    uploadsToday,
    errorsToday,
    uptime
  });
}
