const express = require("express");
const upload = require("../middleware/upload");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.json({
    message: "File uploaded successfully",
    file: req.file,
  });
});
router.delete("/:filename", (req, res) => {
  const filePath = path.join(__dirname, "../uploads", req.params.filename);

  fs.unlink(filePath, (err) => {
    if (err) {
      return res.status(404).json({ message: "File not found" });
    }

    res.json({ message: "File deleted successfully" });
  });
});
router.get("/", (req, res) => {
  const uploadDir = path.join(__dirname, "../uploads");

  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ message: "Unable to read files" });
    }
    res.json(files);
  });
});


module.exports = router;
