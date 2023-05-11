import React, { useState } from 'react';
function TodoForm(props){
    const [text, setText] = useState("")

    function handleChange(event){
        let t = event.target.value;
        setText(t);
    }
    
    
    function addItem(event){
        event.preventDefault();
        if(text){
        
        
       // setItems([...items, text]);
       props.onAddItem(text);
        setText("");
        
        
    }}

    return(
        
        <form>
        <input onChange={handleChange} type='text' placeholder='Digite um todo' value={text}/>
        <button onClick={addItem}>Add</button>
        </form>
        
    )
}



export default TodoForm;