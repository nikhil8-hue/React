import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoIteams from "./components/TodoIteams";
import { useState } from "react";
import WelcomeMassage from "./components/WelcomeMassage";
import { TodoItemsContext } from "./Store/todo-items-store";
function App() {
  
  const intialTodoItems=[
    {name:'Buy milk',
    date:'2/03/24',
  },
  {
    name:'goto collage',
    date:'3/03/24',
  },
  {name:'Buy milk',
  date:'2/03/24',
  }
  ];
  const [todoiteams,setTodoitems]= useState([])

  const handleNewItem = (itemName, itemDate)=>{

    console.log ({itemName} ,{itemDate})
     const newTodoitems = [
      ...todoiteams, {name:itemName ,date: itemDate }
     ]
     setTodoitems(newTodoitems)

  }

  const handleDeleteItem =(todoItemsName)=>{
    const newTodoItems =todoiteams.filter(item => item.name !== todoItemsName)
    setTodoitems(newTodoItems)
  }

  
  return(
    <TodoItemsContext.Provider value={todoiteams}> 
  <center className="todo-contanier">
    <AppName></AppName>
    <AddTodo onNewItem={handleNewItem}></AddTodo>
     <WelcomeMassage ></WelcomeMassage>
    <TodoIteams todoiteams onDeleteClick={handleDeleteItem}></TodoIteams>
  </center>
  </TodoItemsContext.Provider>

  )
}

export default App;
