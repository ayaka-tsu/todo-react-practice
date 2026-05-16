// import { useState } from 'react'
import './style.css'

const Todo = () =>{
  // const[status,setStatus]=useState("未完了")
  return(
    <>
    <div className='todo-app'>
      <div className='top-bar'>
    <div className='add-form'>
              <input type='text' placeholder='Todo'/>
          <button>追加</button>
          </div>
          <div className='filter-buttons'>
            <button>すべて</button>
                        <button>未完了</button>
            <button>着手中</button>
            <button>完了</button>
          </div>
          </div>
      <ul className='todo-list'>
        <li className='todo-item'>
          <div className='left-group'>
          <input type='checkbox' />
          <div className='text-group'>
            <div className='todo-title'>
                    Todoです
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
          <button>編集</button>
          <button>完了</button>
          <button>削除</button>
          <select>
            <option>未完了</option>
                        <option>着手中</option>
            <option>完了</option>

          </select>
          </div>
        </li>
        <li className='todo-item'>
          <div className='left-group'>
          <input type='checkbox' />
                    <div className='text-group'>
<div className='todo-title'>
                    Todoです
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
          <button>編集</button>
          <button>完了</button>
          <button>削除</button>
          <select>
            <option>未完了</option>
                        <option>着手中</option>
            <option>完了</option>

          </select>
          </div>
        </li>

      </ul>
      <div className='trash-area'>
        <div className='trash-content'>
          <div className='trash-title'>
        削除したリスト
        </div>
        <ul className='trash-list'>
          <li className='trash-item'>
            削除したTodo
            <button>元に戻す</button>
          </li>
          <li className='trash-item'>
            削除したTodo
            <button>元に戻す</button>
          </li>

        </ul>
      </div>
      </div>
                </div>

    </>
  )
}
export default Todo
