const express = require("express");
const router = express.Router();

// data will be hold in /files
router.get("/", function (req, res, next) {
  const fs = require("fs");
  const dir = __dirname;

  fs.readdir(dir, (err, files) => {
    let fileList = "";
    if (err) console.log(err);
    else {
      files.forEach((file) => {
        const fileName = file;
        if (fileName.slice(file.length - 4) === ".dcm") fileList += file + " ";
      });
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      fileList.slice(0, fileList.length - 1);
      res.send(fileList);
    }
  });
});

// filename will send the file to the client.
router.get("/:name", (req, res, next) => {
  const fileName = __dirname + "/" + req.params.name;
  const options = {
    headers: {
      "x-timestamp": Date.now(),
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "x-sent": true,
    },
  };
  res.sendFile(fileName, options, (err) => {
    if (err) next(err);
  });
});

module.exports = router;
