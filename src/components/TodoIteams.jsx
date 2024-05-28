import { useContext } from "react";
import TodoIteam from "./TodoItem";
import { TodoItemsContext } from "../Store/todo-items-store";




const TodoIteams =({onDeleteClick})=> {
  const todoiteams = useContext(TodoItemsContext)
  return (
  <div className="item-contanier">
    {todoiteams.map(item =><TodoIteam todoname={item.name}tododate={item.date} onDeleteClick={onDeleteClick}>
  </TodoIteam>) }
</div>
  )
}

export default TodoIteams;