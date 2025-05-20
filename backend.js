const express = require("express");
const spi = require("spi-device");
const Gpio = require("onoff").Gpio;
const app = express();
const port = 3000;

// Serve static files
app.use(express.static("public"));

// Initialize SPI for MCP3008
const adc = spi.openSync(0, 0);

// Function to read from a specific ADC channel
function readADC(channel, callback) {
  const message = [
    {
      sendBuffer: Buffer.from([0x01, (8 + channel) << 4, 0x00]),
      receiveBuffer: Buffer.alloc(3),
      byteLength: 3,
      speedHz: 20000,
    },
  ];

  adc.transfer(message, (err, message) => {
    if (err) {
      callback(err, null);
    } else {
      const rawValue =
        ((message[0].receiveBuffer[1] & 0x03) << 8) +
        message[0].receiveBuffer[2];
      callback(null, rawValue);
    }
  });
}

// Endpoint to get sensor data
app.get("/sensor-data", (req, res) => {
  readADC(0, (err, dustValue) => {
    if (err) {
      res.status(500).send("Error reading dust sensor");
    } else {
      readADC(1, (err, lightValue) => {
        if (err) {
          res.status(500).send("Error reading light sensor");
        } else {
          res.json({
            dust: dustValue,
            light: lightValue,
          });
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

//uploading files
const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const upload = multer({dest: "uploads/"});

app.post("/upload", upload.single("dataFile"), (req, res) => {
  // Access uploaded file via req.file
  // Process the file as needed
  res.json({message: "File uploaded successfully"});
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

//process and store uploaded data
const fs = require("fs");
const csv = require("csv-parser");

app.post("/upload", upload.single("dataFile"), (req, res) => {
  const results = [];
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      // Save results to database with user association
      res.json({message: "Data processed and stored"});
    });
});

//visualize data on dashboard
app.get("/api/user-data", (req, res) => {
  // Retrieve user's data from database
  res.json(userData);
});
