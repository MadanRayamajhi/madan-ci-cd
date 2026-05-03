const express = require("express");
const app = express();

app.get("/", (req, res) => {
 res.send("CI/CD Pipeline Success | GitHub → Jenkins → Docker → AWS EC2 Deployment Complete - madan");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
