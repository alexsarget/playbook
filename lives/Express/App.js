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

app.listen(port,()=>{
    console.log("Server Listo")
})