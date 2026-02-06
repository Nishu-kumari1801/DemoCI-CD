import express from 'express';
import sum from './sum.js';

const app = express();
const PORT=8000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

app.get('/home',async(req,res)=>{
    res.json({
        msg:"Welcome to the Home Page"
    });
});

app.get("/getsum/:a/:b",async(req,res)=>{
    const {a, b} = req.params;
    const result = sum(parseInt(a), parseInt(b));
    res.json({ result });
});