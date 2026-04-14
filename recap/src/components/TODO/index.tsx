import React from "react";
import TodoItem from "./todoItem";
import"./style.css"

interface DTODO{
   
    title: string,
     id:number
}
interface todoprops{
    items: DTODO[];
}
const Todo: React.FC <todoprops> = (props)=>{
    return(
        <div className="TOdo_cont">
            <ol>
               {
                props.items.map((item)=>(
                    <TodoItem key={item.id} title={item.title}/>
                ))
               }
            </ol>
        </div>
    )
}

export default Todo; 