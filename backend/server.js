const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const {
  encryptAES,
  decryptAES,
  encryptDES,
  decryptDES,
  encryptRSA,
  decryptRSA,
} = require("./encryption");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));


app.post("/encrypt", (req, res) => {

  const { text, algo } = req.body;

  let result;

  if (algo === "aes") result = encryptAES(text);
  else if (algo === "des") result = encryptDES(text);
  else if (algo === "rsa") result = encryptRSA(text);

  res.json({ result });

});


app.post("/decrypt", (req, res) => {

  const { text, algo } = req.body;

  let result;

  if (algo === "aes") result = decryptAES(text);
  else if (algo === "des") result = decryptDES(text);
  else if (algo === "rsa") result = decryptRSA(text);

  res.json({ result });

});


app.listen(5000, () => {
  console.log("Server running on 5000");
});