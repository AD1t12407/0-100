

const express=require("express")
const bodyParser= require("body-parser");

const port=3000
const app=express();
app.use(bodyParser.json())

app.post('/',function(req,res){
    console.log(req.body);
    res.send('hello world')
})
//app.get("/route-handler",)

app.listen(port)
