// const fs=require('fs')

    //read file
//     fs,readfile('kle.txt',Utf8,(err,data)=>{
//         if(err)
//         {
//             console.error('error rading file',err)
//             return
//         }
//         console.log('file contains',data);
//     })

//     //write
//     fs.writefile('file.txt','hello world!',(err)=>{
//         if(err){
//             console.error('error writing to file:',err);
//             return;
//         }
//         console.log('file written successfully!');
//     });
    
//     //update--->append
//     fs.appendfile('kle.txt','\nAppended text!',(err)=>{
//         if(err){
//             console.error('error appending in file',err);
//             return
//         }
//         console.log('data appended successfully');
//     })
//     //delete--->unlink
//     fs.unlink('kl.txt',(err)=>{
//         if(err){
//             console.error('error unlinked in file',err);
//             return
//         }
//         console.log('')

//     })

// )
// const path=require('path')
// const file=path.resolve('anuradha','kle.txt')
// console.log(file);

// let http=require('http') //import http
// http.createServer(function(req,res)
// {
//     if(req.url=='/home')
//     {
//         res.write('home')
//     }
//     else if(req.url=='/about')
//     {
//         res.write('about')
//     }
//     else
//     {
//         res.write('undefined')
//     }
// res.end()
// })
// .listen(8000,()=>console.log('server is running in the port 8000'))

//import express module
const e = require('express');
const express = require('express');
const app = express();

app.use(express.json());

//simple user data
let users =
 [ ]
       
//GET all users
app.get('/users',(req,res)=>{
    res.json(users); //fixed from res.join(users) to res.json(users
});
//POST - Add a new user
app.post('/users',(req, res) => {
    const newUser = { id: users.length + 1, ...req.body,
        name:"name", ...req.body,
       
    };
    users.push(newuser);
    res.status(201).json(newuser);
   
});
//PUT - update a user
app.put('/users/:id',(req,res)=>{
    const user = users.find(u=> u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({message:"user not found" });
    user.name = req.body.name|| user.name;
    user.email = req.body.email|| user.email;c

    res.json(user);
});

//DELETE -Remove a user
app.delete('/user/:id',(req,res)=>{
    users = users.filter(user => user.id !== parseInt(req.params.id));
    res.json({message:'user deleted'});
});


   // start the Server
   app.listen(8000, () => console.log("server is running on port 8000"))

