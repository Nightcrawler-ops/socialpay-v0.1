const express = require('express');
const bcrypt = require('bcrypt');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, addDoc, query, where } = require('firebase/firestore');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.json());

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0D-VU-9YHRXwnyEiGLScBtojSOFhVAL0",
  authDomain: "socialpay-1.firebaseapp.com",
  projectId: "socialpay-1",
  storageBucket: "socialpay-1.firebasestorage.app",
  messagingSenderId: "36119451946",
  appId: "1:36119451946:web:358399d34070082d996653",
  measurementId: "G-S7H50TX3HW"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Serve static files
app.use(express.static(path.join(__dirname, 'html')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.post('/signup', async (req, res) => {
    const { fullname, username, email, password } = req.body;

    if (!fullname || !username || !email || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        return res.status(400).json({ message: "User already exists. Please login." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await addDoc(usersRef, { fullname, username, email, password: hashedPassword });

    res.status(201).send({ message: 'Signup successful' });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        return res.status(400).json({ message: "User not found." });
    }

    const user = querySnapshot.docs[0].data();
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
        res.send({ message: "Login successful", username: user.username });
    } else {
        res.status(400).send({ message: "Invalid credentials." });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
