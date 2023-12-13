import express from "express"
const app=express();
const port=3001;

app.get("/",(req,res)=>{
    res.send("<h1><b>hello World<B></h1>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1><b>phone no:shushsuhs won't tell ya,jk <br> :9182871695<B></h1>");
});

app.get("/about",(req,res)=>{
    res.send("<h1><b>ABOut Me<B> holmes ,sherlock Holmes and my adress is 221B Baker's street </h1>");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});