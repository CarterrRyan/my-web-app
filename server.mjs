import express from "express";
import { db } from "./firebaseConfig.mjs";
import { collection, addDoc, doc, getDoc, getDocs,DocumentReference } from "@firebase/firestore"; 
import cors from 'cors';


const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());


let users=[];
app.post('/register', async (req, res) => {
    try {
        const { email, name, password } = req.body;
        if (users.some(user => user.email === email)){
          return res.status(400).json({error: "Username already taken"});
        }
        users.push({ email, password, name });

          try {
            const docRef = await addDoc(collection(db, "users"), {
              email: email,
              name: name,
              password: password,
            });
            console.log("Document written with ID: ", docRef.id);
            return res.status(200).json({Success:email});
          } catch (e) {
            console.error("Error adding document: ", e);
            return res.status(500).json({ Error: "Error adding document: " + e.toString() });
          }
    } catch (e) {
        return res.status(500).json({ Error: e.toString() });
    }
});


app.listen(port, ()=>{
    console.log('server is running on port 3000')
});