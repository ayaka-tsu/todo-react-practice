// import { useState } from 'react'
import './style.css'

const Todo = () =>{
  return(
    <>
    <div>
<h1>Todoリスト</h1>
</div>
<div className='input-area'>
  <input placeholder='Todo' />
  <button>追加</button>
<button>すべて</button>
<button>未完了</button>
<button>着手中</button>
</div>
<div>
  <input type='checkbox' />
  Todoです
  <button>編集</button>
    <button>完了</button>
  <button>削除</button>
  <select>
    <option>未完了</option>
        <option>着手中</option>
    <option>完了</option>
  </select>
</div>
<div>
  <input type='checkbox' />
  Todoです
  <button>編集</button>
    <button>完了</button>
  <button>削除</button>
  <select>
    <option>未完了</option>
        <option>着手中</option>
    <option>完了</option>
  </select>
</div>
<div>
  <input type='checkbox' />
  Todoです
  <button>編集</button>
    <button>完了</button>
  <button>削除</button>
  <select>
    <option>未完了</option>
        <option>着手中</option>
    <option>完了</option>
  </select>
</div>
<div>
  <input type='checkbox' />
  Todoです
  <button>編集</button>
    <button>完了</button>
  <button>削除</button>
  <select>
    <option>未完了</option>
        <option>着手中</option>
    <option>完了</option>
  </select>
</div>
<div>
  <input type='checkbox' />
  Todoです
  <button>編集</button>
    <button>完了</button>
  <button>削除</button>
  <select>
    <option>未完了</option>
        <option>着手中</option>
    <option>完了</option>
  </select>
</div>
<div>
  <h2>削除した項目</h2>
  <div>削除済Todo1  
    <button>元に戻す</button>
</div>
    <div>削除済Todo2  
    <button>元に戻す</button>
</div>
  <div>削除済Todo3  
    <button>元に戻す</button>
</div>

</div>
    </>
  )
}
export default Todo
