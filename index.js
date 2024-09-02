
const express = require("express");
const bodyParser=require('body-parser');


const users= [ {id:1,
emailId : "student1@gmail.com",
location : "Hyderabad"
},
{id:2,
    emailId : "student2@gmail.com",
    location : "Pune"
    },
    { id:3,
      emailId : "student3@gmail.com",
      location : "MUMBAI"
    }]

const app = express ();
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.status(200).send("INDIAN INNOVETION HUB");
})

app.get("/about",(req,res)=>{
res.status(200).send("NTURALFARM");
})
app.post('/users',(req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.status(200).send("user has been added successfully")
})
const port = 8000;
app.listen(port, () => {
    console.log(`Site is running on port http://127.0.0.1:${port}`);
});


