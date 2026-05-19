import { useState } from 'react'
import './style.css'

const Todo = () =>{
  // const[status,setStatus]=useState("未完了")
  const[text,setText]=useState("")
    const [todos,setTodos]=useState<{
      id:number
      text: string
      completed: boolean
    }[]>([])
    const[deletedTodos,setDeletedTodos]=useState<{
      id:number
      text:string
      completed:boolean
    }[]
    >([])
  const addTodo=()=>{
    setTodos([...todos,
      {id:1,
        text:text,
      completed:false
    }])
  }
  const handleRestore=(id: number)=>{
  const restoreTodo=deletedTodos.find((todo)=> todo.id===id
  )
  if(!restoreTodo)return
  setTodos([...todos,restoreTodo])
  setDeletedTodos(
    deletedTodos.filter((todo)=>todo.id !==id)
  )
  }
  return(
    <>
    <div className='todo-app'>
      <div className='top-bar'>
    <div className='add-form'>
              <input type='text' 
              placeholder='Todo'
   value={text}onChange={(e) => setText(e.target.value)}/>
          <button onClick={addTodo}>追加</button>
          </div>
          <div className='filter-buttons'>
            <button className='filter-btn'>すべて</button>
                        <button className='filter-btn'>未完了</button>
            <button className='filter-btn'>着手中</button>
            <button className='filter-btn'>完了</button>
          </div>
          </div>
      <ul className='todo-list'>
        {todos.map((todo)=>(
        <li className='todo-item'>
          <div className='left-group'>
          <input type='checkbox'
          checked={todo.completed}
           />
          <div className='text-group'>
            <div className='title-box'>
            <div className={
              todo.completed
              ? 'todo-title completed'
              : 'todo-title'
            }>
                    {todo.text}
                            </div>  
                            </div>  
                            
          <div className='todo-info'>
<div className='date-row'>
  <label>
        作成日
        <input className="date-input"type='date' />  
</label>

  <label>
期限
        <input className="date-input"type='date' />  
</label>
          </div>
          </div>
          </div>
          </div>
          <div className='right-group'>
          <button className='right-btn'>編集</button>
          <button className='right-btn'
          onClick={()=>
            setTodos(
              todos.map((item)=>
              item===todo
            ?{...item,completed: true}
          : item
        )
            )
          }>完了</button>
          <button className='right-btn'
          onClick={()=>{
setDeletedTodos([...deletedTodos,todo])

setTodos(
  todos.filter((item)=>item !==todo)
)
          }}>削除</button>
          <select className='status-select'>
            <option>未完了</option>
                        <option>着手中</option>
            <option>完了</option>

          </select>
          </div>
        </li>
))}

      </ul>
      <div className='trash-area'>
        <div className='trash-content'>
          <div className='trash-title'>
        削除したリスト
        </div>
        <ul className='trash-list'>
          {deletedTodos.map((todo)=>(
          <li className='trash-item'>
            {todo.text}
            
            <button className='restore-btn'
            onClick={()=>handleRestore(todo.id)}>元に戻す</button>
          </li>
          ))}

        </ul>
      </div>
      </div>
                </div>

    </>
  )
}
export default Todo
