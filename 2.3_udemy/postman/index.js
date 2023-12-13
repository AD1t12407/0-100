import express from "express"
const app=express();
const port=3001;

app.get("/",(req,res)=>{
    res.send("<h1><b>Home Page<b></h1>");
});

app.post("/register", (req,res) => {
    res.sendStatus(200);
});

app.put("/user/aditi", (req,res) => {
    res.sendStatus(200);
});

app.patch("/user/aditi", (req,res) => {
    res.sendStatus(200);
});

app.delete("/contact",(req,res)=>{
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
