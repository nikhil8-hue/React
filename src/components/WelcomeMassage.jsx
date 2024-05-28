 import styles from "./WelcomeMassage.module.css"
 import { useContext } from "react"
 import { TodoItemsContext } from "../Store/todo-items-store"

 const WelcomeMassage =()=>{
  const todoiteams = useContext(TodoItemsContext)
  return(
    todoiteams.length===0 && <p className= {styles.welcome} >Enjoy Your Day</p>
  ) 
  }


 export default WelcomeMassage