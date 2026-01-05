const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

// 🔥 IMPORTANT LINE (YEH MISSING THI)
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/api/files", require("./routes/fileRoutes"));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
