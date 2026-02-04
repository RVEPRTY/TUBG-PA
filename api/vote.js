import crypto from "crypto";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { category, nominee } = req.body;
  if (!category || !nominee) {
    return res.status(400).json({ error: "Missing data" });
  }

  // Lock voting until Feb 17, 2026
  const openDate = new Date("2026-02-17T00:00:00Z");
  if (new Date() < openDate) {
    return res.status(403).json({ error: "Voting not open yet" });
  }

  const code = crypto.randomBytes(6).toString("hex").toUpperCase();

  res.json({
    success: true,
    code,
    category,
    nominee,
    timestamp: new Date().toISOString()
  });
}
