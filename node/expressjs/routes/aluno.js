var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();


//express.Router();


let alunos = [
    {id: 0, nome: "Jose"},
    {id: 1, nome: "Maria"},
    {id: 2, nome: "Joao"},
    {id: 3, nome: "Marcos"}
]

router.get("/", (req,res, next) => {
    console.log(req.body);

   let aluno = alunos[req.body.id]
    if(aluno){
        res.json(aluno);
   }else{
       next()
  }
})

router.get("/", (req, res, next)=>{
    console.log(req.query);
    

    let aluno = alunos[req.query.id]
    if(aluno){
        res.json(aluno);
    }else{
        res.send("aluno não encontrado")
    }
})

router.get("/all", ( req, res, next)=>{
   
    res.json(JSON.stringify(alunos))
})

router.get("/:id", (req,res, next)=>{
    console.log(req.params.id);
    
    let aluno = alunos[req.params.id]
    
        res.json(aluno);
})

module.exports = router;
