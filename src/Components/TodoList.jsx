import React from 'react'

function TodoList(props) {
  return (
    <li className='list-item mx-auto'>
      {props.item}
      <span  className='icons'><i className="fa-solid fa-trash-can icon-delete" onClick={e=>{
        props.deleteItem() //pass the index to deleteItem , here we dont use of key thats we use index
      }}></i></span>
    </li>
  )
}

export default TodoList;