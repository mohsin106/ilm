import React from "react"
import TodoItem from "./TodoItem"

function MainContent() {
    // const date = new Date(2021, 8, 20, 22)
    // const hours = date.getHours()
    // let timeOfDay
    // const styles = {
    // }

    return (
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}
export default MainContent