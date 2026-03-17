const express = require("express");
const app = express();

// ✅ Environment variable support
const PORT = process.env.PORT || 3000;

// ✅ Logging middleware (logs every request)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ✅ Main route
app.get("/", (req, res) => {
  res.send("Kubernetes Self-Healing App Running 🚀");
});

// ✅ Health check route (VERY IMPORTANT for Kubernetes)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// ✅ Slow endpoint (simulate delay for testing)
app.get("/slow", async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 10000));
  res.send("Slow response");
});

// ✅ Simulate failure endpoint (for self-healing demo)
app.get("/crash", (req, res) => {
  process.exit(1);
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});