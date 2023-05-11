import { useState } from "react";


function Titulo ({nome, paragrafo, cor}){
    
    const[texto, setTexto] = useState("Um titulo do estado Inicial")
    const[inputText, setinputText] = useState("")

    function clicou(){
        setTexto(inputText);
    }




 return (
    <div> 
        <h1 style={{color:cor}} > {texto} </h1>
        <input value={inputText} onChange={(e)=>{setinputText(e.target.value)}} type="text"/>
        <button onClick={clicou}>Mudar</button>
        </div>


   )
}


export default Titulo;