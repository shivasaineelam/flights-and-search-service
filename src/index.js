const express=require("express");
const bodyParser=require("body-parser")
const { PORT } = require("./config/serverConfig");

const port =PORT||3000;
const setUpAndStartServer=async ()=>{
    const app=express();
    app.use(bodyParser.json());w
    app.use(bodyParser.urlencoded({extended:true}))
    app.listen(port,()=>{
        console.log(`server started at port ${port}`)
    })
}
setUpAndStartServer();