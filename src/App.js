import React from "react"
import './App.css';
import ToDoList from  './ToDoList';



import { useState } from 'react';

const App = () =>{

  const [inputList,setInputList] = useState("Apple");
  const [Items,setItems] = useState([]);
  const itemEvent = (event) =>{
  setInputList(event.target.value);
  };
  const listOfItems = () =>{
    setItems((oldItems)=> {
      return[...oldItems,inputList];

    });
    setInputList("");

  };
  const deleteItems = (id) =>{
    console.log("deleted-items")
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id;
      })
    })
}
  return(
  <>
  <div className="main_div">
    <div className="cnter_div">
      <br/>
      <h1>Todo-List</h1>
      <br/>
      <input type="text" placeholder="Add Item-List"
      value={inputList}
      onChange={itemEvent}/>
      <button onClick={listOfItems}> +</button>
      <ol>
      
       {Items.map((itemval, index) => {
       return <ToDoList key={index}
        id={index} 
        onSelect = {deleteItems}
        text={itemval}/>;

       })}
      </ol>

    </div>

  </div>
  
  
  
   </>
  ) 
};

export default App;
