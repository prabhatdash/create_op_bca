const express=require("express")
const port= process.env.PORT || 3000
const app=express()
const hbs=require("hbs")
const path=require('path')
const views_path=path.join(__dirname,"../templates/views")
const body_parser=require("body-parser")
app.use(body_parser.json())
app.use(body_parser.urlencoded(extended=false))

require("./db/conn")
const register=require("./models/register")
app.set("view engine","hbs")
app.set("views",views_path)




app.listen(port,()=>{
    console.log(`Running in Port: ${port}`)
})

app.get("/index",(req,res)=>{
    res.render("index")
})

// app.post("/send",(req,res)=>{
//
// })

app.get("/data",(req,res)=>{
    res.send("I AM COMING FROM BACKEND !")
})

app.get("/geo",(req,res)=>{
    res.send("THIS IS A MINOR CLASS")
})


app.get("/bca",(req,res)=>{
    res.send("this is a full stack class")
})

app.post("/send",(req,res)=>{
    const name=req.body.name
    console.log(name)
    const save_data= new register({name:name})
    save_data.save().then(
        ()=>{
            console.log("Data Saved to DB !")
        }
    ).catch(
        (e)=>{
            console.log(`Error: ${e}`)
        }
    )
    res.send("Data send to backend !")
})

app.get("/display",async(req,res)=>{
    const data=await register.find()
    console.log(data)
    res.render("display",{data})
    // res.send("DATA DISPLAYED IN BACKEND !")
})