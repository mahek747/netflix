import express from 'express';

const app = express();

app.get('/signup', (req,res) =>{
    res.send("signup route"); 
});
app.get('/login', (req,res) =>{
    res.send("login route"); 
});
app.get('/logout', (req,res) =>{
    res.send("logout route"); 
});
app.listen(8000, () => {
    console.log(`Server is running on port 8000!!`);
});