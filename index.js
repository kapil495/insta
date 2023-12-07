const { urlencoded } = require("express");
const express = require("express")

var con = require("./conn")
con.connect()

var app = express();

app.use(urlencoded({extended:false}))
app.listen(80,()=>{
    console.log("listening at localhost:80")
})
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("index")
})
app.post("/",(req,res)=>{
    data = req.body;
    console.log(data.username+" "+data.password)
    con.query("insert into details(name,password) VALUES ('"+data.username+"','"+data.password+"')",(error,result,field)=>{
    res.redirect("/")  
    })
})


app.get("/view",(req,res)=>{
    con.query("Select * from details",(error,result,field)=>{
        
        var data = result;
        console.log(data)
        res.render("view",{data:data})

    })
})
