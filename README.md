
# 🔐 Text Encryption System using AES, DES, and RSA

## 📌 Overview

This project is a web-based application that performs secure text encryption and decryption using three widely used cryptographic algorithms: **AES, DES, and RSA**. It provides a simple and interactive user interface where users can input text, select an algorithm, and perform encryption or decryption operations.

The system demonstrates both **symmetric encryption (AES, DES)** and **asymmetric encryption (RSA)**, helping users understand different approaches to data security.

---

## 🚀 Features

* 🔒 Encrypt and decrypt text data
* 🔁 Supports multiple algorithms (AES, DES, RSA)
* 🌐 Web-based interface 
* 🎯 User-friendly UI with interactive design
* 🔄 Real-time result display

---

## 🧠 Algorithms Used

### 🔹 AES (Advanced Encryption Standard)

* Symmetric encryption algorithm
* Uses key sizes of 128/192/256 bits
* Highly secure and widely used in modern systems

### 🔹 DES (Data Encryption Standard)

* Symmetric encryption algorithm
* Uses 56-bit key
* Less secure but useful for learning purposes

### 🔹 RSA (Rivest–Shamir–Adleman)

* Asymmetric encryption algorithm
* Uses public and private key pairs
* Suitable for secure key exchange and authentication

---

## 🛠️ Tech Stack

**Frontend:**

* HTML
* Tailwind CSS
* JavaScript

**Backend:**

* JavaScript (Node.js)
* Express.js

**Communication:**

* REST APIs (JSON format)

---

## 📂 Project Structure

CNS/
│
├── backend/
│   ├── encryption.js     # Encryption & Decryption logic (AES, DES, RSA)
│   └── server.js         # Node.js + Express server
│
├── frontend/
│   └── index.html        # User Interface
│
├── node_modules/         # Installed dependencies
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Dependency lock file
└── README.md             # Project documentation

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/SakthiRishikesh/text-encryption-system.git
cd text-encryption-system
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Backend Server

```bash
node server.js
```

### 4️⃣ Open the Application

* Open `index.html` in your browser
  OR
* Use Live Server in VS Code

---

## 🔄 How It Works

1. User enters text in the input field
2. Selects an encryption algorithm (AES, DES, RSA)
3. Clicks Encrypt or Decrypt
4. Frontend sends request to backend (`/encrypt` or `/decrypt`)
5. Backend processes data using selected algorithm
6. Result is returned and displayed on the UI

---

## ✅ Advantages

* Supports multiple encryption techniques
* Combines symmetric and asymmetric encryption
* Easy to use and understand
* Fast and efficient using JavaScript

---

## ⚠️ Limitations

* DES is less secure due to small key size
* RSA is slower compared to symmetric algorithms
* Depends on proper key management
* Limited to text encryption
* Not suitable for large-scale secure systems without enhancements

---

## 🌍 Applications

* Secure communication
* Data protection systems
* Password encryption
* Educational cryptography tool

---

## 🚀 Future Enhancements

* File and image encryption
* Stronger encryption algorithms
* Key management system
* User authentication

---

## 🧾 Conclusion

This project demonstrates the implementation of AES, DES, and RSA algorithms in a web-based system using JavaScript. It highlights the importance of cryptography in securing data and provides a practical understanding of encryption techniques used in real-world applications.

---

## 📚 References
	GeeksforGeeks, “RSA Algorithm.” https://www.geeksforgeeks.org/rsa-algorithm-cryptography/
	GeeksforGeeks, “DES Algorithm.” https://www.geeksforgeeks.org/data-encryption-standard-des-/
	GeeksforGeeks, “AES Algorithm.” https://www.geeksforgeeks.org/advanced-encryption-standard-/
	NIST (National Institute of Standards and Technology), Cryptographic Standards and Guidelines)
https://www.nist.gov
	University Lecture Notes and Course Materials – Computer Networks and Security (CNS).

