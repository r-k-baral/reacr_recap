import React from "react";
import TodoItem from "./todoItem";
import"./style.css"

const Todo: React.FC = ()=>{
    return(
        <div className="TOdo_cont">
            <ol>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </ol>
        </div>
    )
}

export default Todo; 