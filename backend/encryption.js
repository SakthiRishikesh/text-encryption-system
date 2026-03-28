// const crypto = require("crypto");

// const key = crypto
//   .createHash("sha256")
//   .update("secretkey")
//   .digest()
//   .slice(0, 32);

// const iv = Buffer.alloc(16, 0);


// // AES
// function encryptAES(text) {
//   const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
//   return cipher.update(text, "utf8", "hex") + cipher.final("hex");
// }

// function decryptAES(text) {
//   const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
//   return decipher.update(text, "hex", "utf8") + decipher.final("utf8");
// }


// // DES
// function encryptDES(text) {
//   const cipher = crypto.createCipheriv("des-ede3", key.slice(0,24), "");
//   return cipher.update(text, "utf8", "hex") + cipher.final("hex");
// }

// function decryptDES(text) {
//   const decipher = crypto.createDecipheriv("des-ede3", key.slice(0,24), "");
//   return decipher.update(text, "hex", "utf8") + decipher.final("utf8");
// }


// // RSA

// const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
//   modulusLength: 2048,
// });

// function encryptRSA(text) {
//   return crypto.publicEncrypt(publicKey, Buffer.from(text)).toString("hex");
// }

// function decryptRSA(text) {
//   return crypto.privateDecrypt(privateKey, Buffer.from(text, "hex")).toString();
// }


// module.exports = {
//   encryptAES,
//   decryptAES,
//   encryptDES,
//   decryptDES,
//   encryptRSA,
//   decryptRSA,
// };


const crypto = require("crypto");

const key = crypto
  .createHash("sha256")
  .update("secretkey")
  .digest()
  .slice(0, 32);

const iv = Buffer.alloc(16, 0);


// AES
function encryptAES(text) {
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  return cipher.update(text, "utf8", "hex") + cipher.final("hex");
}

function decryptAES(text) {
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  return decipher.update(text, "hex", "utf8") + decipher.final("utf8");
}


// DES
function encryptDES(text) {
  const cipher = crypto.createCipheriv("des-ede3", key.slice(0, 24), null);
  return cipher.update(text, "utf8", "hex") + cipher.final("hex");
}

function decryptDES(text) {
  const decipher = crypto.createDecipheriv("des-ede3", key.slice(0, 24), null);
  return decipher.update(text, "hex", "utf8") + decipher.final("utf8");
}


// RSA KEYS (generate once)

const rsaKeys = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
});

const publicKey = rsaKeys.publicKey;
const privateKey = rsaKeys.privateKey;


function encryptRSA(text) {
  return crypto
    .publicEncrypt(publicKey, Buffer.from(text))
    .toString("hex");
}

function decryptRSA(text) {
  return crypto
    .privateDecrypt(privateKey, Buffer.from(text, "hex"))
    .toString();
}


module.exports = {
  encryptAES,
  decryptAES,
  encryptDES,
  decryptDES,
  encryptRSA,
  decryptRSA,
};
