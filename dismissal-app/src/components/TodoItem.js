import React from "react"

function TodoItem(props) {
    // console.log(props)
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
                />
            {props.item.completed ? <p className="todo-completed">{props.item.text}</p> : <p>{props.item.text}</p>
            }
        </div>
    )
}
export default TodoItem