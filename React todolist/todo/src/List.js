import React from 'react';

function List(props){
    return (<ul>
       {props.items.map(item=><li>{item}</li>)}
    </ul>)
   }


export default List;