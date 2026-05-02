const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🔥 CLEAN CI/CD PIPELINE - madan 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
