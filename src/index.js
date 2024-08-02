const express=require("express");
const bodyParser=require("body-parser")
const { PORT } = require("./config/serverConfig");
const v1ApiRoutes=require("./routes/index")
const port =PORT||3000;
const setUpAndStartServer=async ()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    app.listen(port,()=>{
        console.log(`server started at port ${port}`)
    })
    app.get("/",(req,res)=>res.send("Hello World"))
    app.use("/api",v1ApiRoutes);
}
setUpAndStartServer();