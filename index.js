const express = require("express");
//const cors = require("cors");
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
        //const id = req.body.id;
        const profilhewan = {
            id: req.body.id,
            nama: req.body.nama,
            umur: req.body.umur,
            jenishewan: req.body.jenishewan,
            hasilkawin: req.body.hasilkawin,
            beratbadan: req.body.beratbadan,
            jeniskelamin: req.body.jeniskelamin
        };
        const response = await db.collection("profilhewan").add(profilhewan);
        res.send(response);
    } catch (error) {
        res.send(error);
    }
});

app.get("/read", async (req, res) => {
    try {
        const userRef = db.collection("profilhewan");
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
        const userRef = db.collection("profilhewan").doc(req.params.id);
        const response = await userRef.get();
        res.send(response.data());
    } catch (error) {
        res.send(error);
    }
});

app.post("/update/:id", async (req, res) => {
    try {
        const response = await db.collection("profilhewan").doc(req.params.id).update({
            id: "A-900",
            nama: "Siti",
            umur: "5",
            jenishewan: "Kambing",
            hasilkawin: true,
            beratbadan: "54",
            jeniskelamin: "Betina"
        });
        res.send(response);
    } catch (error) {
        res.send(error);
    }
});

app.delete("/delete/:id", async (req, res) => {
    try {
        const response = await db.collection("profilhewan").doc(req.params.id).delete();
        res.send(response);
    } catch (error) {
        res.send(error);        
    }
});

app.listen(8081, () => {
    console.log("Server running on port 8081");
})