const express = require('express');
const bodyParser = require('body-parser');
const { admin, db } = require('./firebase-admin-config'); // Import the Firebase Admin configuration
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Welcome to the SocialPay API!");
});

app.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Create a new user with Firebase Admin
        const userRecord = await admin.auth().createUser({
            email,
            password
        });

        // Add user data to Firestore
        await db.collection('users').doc(userRecord.uid).set({
            email: userRecord.email,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        res.status(201).send("User signed up successfully!");
    } catch (error) {
        res.status(400).send("Error signing up user: " + error.message);
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body; // Include password

    try {
        // Verify the user credentials using Firebase Admin
        const userRecord = await admin.auth().getUserByEmail(email);

        // Create a custom token for authentication
        const customToken = await admin.auth().createCustomToken(userRecord.uid);

        res.status(200).send({ message: "Login successful!", token: customToken });
    } catch (error) {
        res.status(400).send("Invalid credentials: " + error.message);
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
