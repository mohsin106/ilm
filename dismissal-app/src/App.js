import React from "react"
// import Header from "./components/Header"
// import MainContent from "./components/MainContent"
// import Footer from "./components/Footer"
// import ContactCard from "./components/ContactCard"
// import Joke from "./components/Joke"
// import jokesData from "./components/jokesData"
// import vschoolProducts from "./components/vschoolProducts"
// import Product from "./components/Product"
import todosData from "./components/todosData"
import TodoItem from "./components/TodoItem"
import './style.css'

function App() {
//  Joke project
//    const jokeComponents = jokesData.map(function (joke) {
//         return (<Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>)
//     })
    
//     return (
//         <div>
//             {jokeComponents}
//         </div>
//     )
//     const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>)
//     return (
//         <div>
//             {jokeComponents}
//         </div>
//     )

//  Joke project

// Product project
    // const productComponent = vschoolProducts.map(item => <Product key={item.id} product={item}/>)
    // return (
    //     <div>
    //         {productComponent}
    //     </div>
    // )
// Product project

// Todos Phase3
    const todoComponent = todosData.map(item => <TodoItem key={item.id} task={item}/>)
    return (
        <div className="todo-list">
            {todoComponent}
        </div>
    )
// Todos Phase3







}
export default App