import express from "express"

const app=express();
const PORT=5002;

app.use(express.json());

app.get("/",(req,res)=>{
    try{
        res.status(200).json({msg:"Hello server"})
    }catch(error){
        console.log(error)
        res.status(500).json({msg:"Error"})
    }
});

app.post("/register",(req,res)=>{
    try{
        let userdata=req.body;
        console.log(userdata)
        res.status(201).json({msg:"Posted successfully"})
    }catch{
         console.log(error)
         res.status(500).json({msg:"error occured"})
    } 
});

app.put("/update",(req,res)=>{
    try{
    let updatedata=req.body;
    console.log(updatedata)
    res.status(200).json({msg:"Updated successfully"});
    }catch(error){
        console.log(error)
        res.status(500).json({msg:"Error occured myaan"});
    }
});


app.delete("/delete",(req,res)=>{
    try{
        let deletedata=req.body;
        console.log(deletedata)
        res.status(200).json({msg:"Deleted successfully"});
    }catch(error){
        console.log(error)
        res.status(500).json({msg:"Error occured"});
    }
});

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})