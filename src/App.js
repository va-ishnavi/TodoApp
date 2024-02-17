
import './App.css';
import React, { useState } from 'react';
import Todoinput from './Components/Todoinput';
import TodoList from './Components/TodoList';

function App() {  // this for func adding....
  const[listTodo,setListTodo] = useState([]);
  let addList =(inputText)=>{  if(inputText!=='') //check, if inputText is empty it will work
    setListTodo([...listTodo,inputText]);
  }
  const deleteListItem =(key)=>{        //for delete
    let newListTodo =  [...listTodo];         //for store list
     newListTodo.splice (key,1)               //here this is remove which one is passed
      setListTodo([...newListTodo])         //update
    }
  return (
    <div className='main-container'>
      <div className='main-center'>
     <Todoinput addList={addList}/>
     <h1 className='app-heading'> Todo</h1>
      <hr/>
      {listTodo.map((listItem,i)=>{
        return(
          <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/> //pass & delete list item to addlist and key for unique
        )
      })} 
      </div>
    </div>

  
  );
}

export default App;
