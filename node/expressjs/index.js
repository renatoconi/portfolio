
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const aluno = require("./routes/aluno")

console.log(aluno)

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", aluno);

app.get("/", (req, res)=>{

    res.send("Hello Word");
})


const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server running on Port: ${PORT} ` )
});





//10.0.0.113