import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.task.completed}/>
            <p>{props.task.text}</p>
        </div>
    )
}
export default TodoItem