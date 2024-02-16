import express from "express";
import { db } from "../firebaseConfig.mjs";
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
            //console.log("Document written with ID: ", docRef.id);
            return res.status(200).json({Success:email});
          } catch (e) {
            console.error("Error adding document: ", e);
            return res.status(500).json({ Error: "Error adding document: " + e.toString() });
          }
    } catch (e) {
        return res.status(500).json({ Error: e.toString() });
    }
});
app.post('/signIn', async (req, res) => {
  let found = false;
  try {
    let {email, password} = req.body;
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      if(userData.email == email && userData.password == password) {
        found = true;
      }
    });

    if (found) {
      return res.status(200).json({'Success': found});
    } else {
      return res.status(404).json({'Error': 'User not found'});
    }
  } catch (e) {
    return res.status(500).json({ 'Error': e.toString() });
  }
});

app.post('/calculate', async (req, res) => {
  try {
    let { num1, num2, operator } = req.body;
    let result = 0;

    num1 = Number(num1); // Convert num1 to a number
    num2 = Number(num2); // Convert num2 to a number

    if (operator == "+") {
      result = num1 + num2;
    } else if (operator == "-") {
      result = num1 - num2;
    } else if (operator == "*") {
      result = num1 * num2;
    } else if (operator == "/") {
      result = num1 / num2;
    }
    console.log("", result);
    return res.status(200).json({ 'Result': result });
  } catch (e) {
    return res.status(500).json({ 'Error': e.toString() });
  }
});


app.listen(port, ()=>{
    console.log('server is running on port 3000')
});