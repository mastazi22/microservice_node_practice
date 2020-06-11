const express=require('express');
const {radnomBytes}=require('crypto');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.json());

const posts={};

app.get('/posts',(req,res)=>
{
    res.post(posts);
});

app.post('/posts',(req,res)=>{
    const id=radnomBytes(4).toString('hex');
    const{title}=req.body();
    posts[id]={
        id,title
    };
    res.status(201).send(posts[id]);
});

app.listen(80,()=>{
console.log('listening on 5000');
});