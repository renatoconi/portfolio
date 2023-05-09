import './App.css';
import Header from './Header';
import Counter from './Counter';
import React from "react";


function App() {

const [show, setShow] = React.useState(true);

let time = 0;

React.useEffect(()=>{
    let timer = setInterval(() => {
        time++;
        console.log(time);
        if(time > 5){
       clearInterval(timer);
       setShow(false);
        }
      }, 1000);
}, [])





if(show){
    return (
      <div>
      <Header name="Renato Coni" links= {["sobre", "comprar", "contato","login"]}></Header>
      <Counter count = {0}>   </Counter>
      </div>
    );
}else{
    return(
        <div>
            Sem Contador
        </div>

    )
}

 
}




export default App;


