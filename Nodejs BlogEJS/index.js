const express = require('express');
const fs = require('fs');
const app = express();
const path = require("path");


let users = [
    {
    id:0,
    name: "Renato Coni",
    phone:"+55 11 9 8341-7649"
},

{
    id:4,
    name: "Rafael Coni",
    phone:"+55 11 9 8341-7649"
},

{
    id:2,
    name: "Ricardo Coni",
    phone:"+55 11 9 8341-7649"
}]

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");


app.get("/", (req, res)=>{

    res.render('user', {users:users});

})

app.listen(3000, ()=>{
    console.log("server running um port 3000")
})

