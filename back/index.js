const express =require('express');
const app =express();
const dotenv = require('dotenv');
dotenv.config();

const connectDB= require('./config/db')

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log("serveur fonctionne")
    
})

module.exports = app;

app.get('/', (req, res) => {
    res.send("Hello from le front, Mohamed Iraqi")
})
app.get('/login', (req, res) => {
    res.send("Bienvenue sur la route login")
})
app.get('/sign-up', (req, res) => {
    res.send("Bienvenue sur la route sign up")
})
app.get('/api/test', (req, res) => {
    res.json({ message: "Connexion Front-Back réussie" })
})



connectDB();
