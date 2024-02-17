import React, { useState } from 'react'

function Todoinput(props) {
    const [inputText,setInputText]= useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13 ){   //enterkey value 13
            props.addList(inputText)  //call
            setInputText('')
        }  
    }
  return (
    <div className="my-2 p-2 ">
     <div className="text-stone-950 text-center ">
        <h3>Hello,Vaishanvi 
            <small> <b>Good Morning!</b></small>
        </h3>
     </div>
     <div className='shadow rounded text-center p-2'>
            <h2>Saturday, 3Feb</h2> 
     </div>
       <div className='input-container'> 
    <div className="wrapper my-4 text-center">
        <h1>Tasks for today</h1>
      <div className="input-box" >
          <input type="text"  placeholder="Enter your todo" value={inputText} onChange={e=>{
            setInputText(e.target.value)
          }}  onKeyDown={handleEnterPress}required />
          <button className='add-btn' onClick={()=>{
            props.addList(inputText)
            setInputText('')
          }}>+</button>
       </div>
    </div>
    </div>
    </div>


    
  );
}

export default Todoinput