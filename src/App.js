import React from "react";
import {useState} from "react";

function App() {
  const  [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (event)=>{
    setInputList(event.target.value);
  };
  const listOfItems = ()=> {
    setItems((oldItems) =>{
      return [...oldItems, inputList];
      
    });
    setInputList("");
  };
  
  return (
<>
<div>
  <h1>ToDo List</h1>
  <input type={"text"} placeholder={"Add a item"} value={inputList} onChange={itemEvent}></input>
  <button onClick={listOfItems}>+</button>
  <ul>
    {items.map((itemval) => {
      return <li> {itemval} </li>;
    })

    }
  </ul>
</div>
</>
  );
}

export default App;
