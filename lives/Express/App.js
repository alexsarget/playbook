const express= require("express")
const app=express()
const port =3000 //localhost:3000

// Esto va a responder a localhost 3000
app.get('/',(req,res)=>{
    res.send("Hola a todos los explorers! aqui se vive la buena vibra")
})


// localhost:30007launchx
app.get('/launchx',(req,res)=>{
    res.send("Binevenidos a LaunchX")
})

app.get('/node',(req,res)=>{
    const explorer1={id:1, name:"Explorer"}
    const explorer2={id:2, name:"Explorer"}
    const explorer3={id:3, name:"Explorer"}
    const explorer4={id:4, name:"Explorer"}
    res.send([explorer1, explorer2, explorer3,explorer4])
})

app.listen(port,()=>{
    console.log("Server Listo")
})