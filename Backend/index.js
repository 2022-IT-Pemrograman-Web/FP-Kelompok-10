const express = require("express");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
const credentials = require("./key.json");

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});
const db = admin.firestore();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/create", async (req, res) => {
    try {
        console.log(req.body);
        const id = req.body.goatId;
        const goat = {
            goatId: req.body.goatId,
            name: req.body.name,
            age: req.body.age
        };
        const response = await db.collection("goats").add(goat);
        res.send(response);
    } catch (error) {
        res.send(error);
    }
});

app.get("/read", async (req, res) => {
    try {
        const userRef = db.collection("goats");
        const response = await userRef.get();
        let responseArr = [];
        response.forEach((doc) => {
            responseArr.push(doc.data());
        });
        res.send(responseArr);
    } catch (error) {
        res.send(error);
    }
});

app.get("/read/:id", async (req, res) => {
    try {
        const userRef = db.collection("goats").doc(req.params.id);
        const response = await userRef.get();
        res.send(response.data());
    } catch (error) {
        res.send(error);
    }
});

app.post("/update/:id", async (req, res) => {
    try {
        const userRef = await db.collection("goats").doc(req.params.id).update({
            goatId: "018",
            name: "Aurel",
            age: "19"
        });
        res.send(response);
    } catch (error) {
        res.send(error);
    }
});

app.delete("/delete/:id", async (req, res) => {
    try {
        const response = await db.collection("goats").doc(req.params.id).delete();
        res.send(response);
    } catch (error) {
        res.send(error);        
    }
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
})