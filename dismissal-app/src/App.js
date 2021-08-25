import React, {Component} from "react"
// import Header from "./components/Header"
// import MainContent from "./components/MainContent"
// import Footer from "./components/Footer"
// import ContactCard from "./components/ContactCard"
import Joke from "./components/Joke"
import jokesData from "./components/jokesData"
import vschoolProducts from "./components/vschoolProducts"
import Product from "./components/Product"
import todosData from "./components/todosData"
import TodoItem from "./components/TodoItem"
import randomcolor from "randomcolor"
import Conditional from "./components/Coditional"
import './style.css'
import { render } from "@testing-library/react"

//  Joke project
// function App() {
//    const jokeComponents = jokesData.map(function (joke) {
//         return (<Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>)
//     })
    
//     return (
//         <div>
//             {jokeComponents}
//         </div>
//     )
//     // More streaminglined function
//     // const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>)
//     // return (
//     //     <div>
//     //         {jokeComponents}
//     //     </div>
//     // )
// }
//  Joke project

// Product project
// function App() {
//     const productComponent = vschoolProducts.map(item => <Product key={item.id} product={item}/>)
//     return (
//         <div>
//             {productComponent}
//         </div>
//     )
// }
// Product project

// Todos Phase3
// function App() {
//     const todoComponent = todosData.map(item => <TodoItem key={item.id} item={item}/>)
//     console.log(todoComponent)
//     return (
//         <div className="todo-list">
//             {todoComponent}
//         </div>
//     )
// }
// Todos Phase3


// Class-based Componets
// class App extends React.Component {
//     constructor() {
//         // contructor initializes some values for the class
//         super()
//         this.state = {
//             isLoggedIn: false
//         }
//     }
//     render() {
//        let wordDisplay
//        if (this.state.isLoggedIn) {
//            wordDisplay = "in"
//        } else {
//            wordDisplay = "out"
//        }
    

//         return (
//             <div>
//                 <h1>Are you logged in? (in/out)</h1>
//                 <h3>{wordDisplay}</h3 >
//             </div>
//         )    
    
//     }
// }
// Class-based Componets

// Todo App: Phase 4
// class App extends React.Component {
//     constructor() {
//         // contructor initializes some values for the class
//         super()
//         this.state = {
//             todos: todosData
//         }
//     }
//     render() {
//         // console.log(this.state.todos)
//         const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
//         return (
//             <div className="todo-list">
//                 {todoItems}
//             </div>
//         )    
//     }
// }
// Todo App: Phase 4

// Handling Events in React
// function increment() {
//     console.log("Separate Function Used")
// }

// function App() {
//     return (
//         <div id="div1">
//             <img src="https://www.fillmurray.com/200/100" 
//             onMouseOver={() => document.getElementById("div1").style.backgroundColor = "blue"}
//             onMouseLeave={() => document.getElementById("div1").style.backgroundColor = "white"}
//             />
//             <br />
//             <br />
//             // call separate function: 
//             <button onClick={increment}>Click me</button>
//             <br />
//             // anonymous function: 
//             <button onClick={function() {console.log("Anonymous Function Used")}}>Click me</button>
//             <br />
//             // ES6 arrow function syntax: 
//             <button onClick={() => console.log("ES6 Arrow Function Syntax Used")}>Click me</button>
//         </div>
//     )
// }
// Handling Events in React

// React Todo App: Phase 5
// class App extends React.Component {
//     constructor() {
//         // contructor initializes some values for the class
//         super()
//         this.state = {
//             todos: todosData
//         }
//     }
//     render() {
//         // console.log(this.state.todos)
//         const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
//         return (
//             <div className="todo-list">
//                 {todoItems}
//             </div>
//         )    
//     }
// }
// React Todo App: Phase 5

// React setState: Changing the State
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//         this.increment = this.increment.bind(this)
//     }
    
//     increment() {
//         // console.log("I'm working!")
//         // Use anonymous
//         // this.setState(function(prevState){
//         //     return {
//         //         count: prevState.count + 1
//         //     }
//         // })
        
//         // Use ES6 arrow function syntax
//         this.setState(prevState => {
//             return {count: prevState.count + 1}
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.increment}>Change!</button>
//             </div>
//         )
//     }
// }
// React setState: Changing the State

// React Todo App: Phase 6
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             todos: todosData
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(id) {
//         this.setState(prevState => {
//             const updatedTodos = prevState.todos.map(todo => {
//                 if (todo.id === id) {
//                     return {
//                         ...todo, // this is the spread operator, which gets all properties of "todo" (3 lines above) and only makes a change to the "completed" field.
//                         completed: !todo.completed
//                     }
//                 }
//                 return todo
//             })
//             console.log(prevState.todos)
//             console.log(updatedTodos)
//             return {
//                 todos: updatedTodos
//             }
//         })
//     }

//     render() {
//         const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
//         return (
//             <div className="todo-list">
//                 {todoItems}
//             </div>
//         )
//     }
// }
// React Todo App: Phase 6

// Lifecycle Methods Part 1
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {}
//     }

//     componentDidMount(){
//         // Get the data I need to correctly display
//     }
    
//     shouldComponentUpdate(nextProps, nextState) {
//         // return true if we want it to update
//         // return false if not
//     }

//     componentWillUnmount() {
//         // used to teardown or clean-up your code before your component disappears
//         // ex: remove event listeners
//     }

//     render() {
//         return (
//             <div>
//                 Code goes here
//             </div>
//         )
//     }
// }
// Lifecycle Methods Part 1

// Lifecycle Methods Part 2
    // Following are new lifecycle methods
    // static getDerivedStateFromProps(props, state) {
        // return the new, updated state based upon the props.
        // not common method to use
    // }
    
    // getSnapShotBeforeUpdate() {
        // create a backup of the current way thins are
        // not common method to use
    // }
// Lifecycle Methods Part 2

// Lifecycle Methods Part 3 - componentDidUpdate
// https://scrimba.com/g/greacthooks
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0,
//             color: ""
//         }
//         this.increment = this.increment.bind(this)
//         this.decrement = this.decrement.bind(this)
//     }
    
//     increment() {
//         // Use ES6 arrow function syntax
//         this.setState(prevState => {
//             return {
//                 count: prevState.count + 1
//             }
//         })
//     }
//     decrement() {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count - 1
//             }
//         })
//     }
//     componentDidMount() {
//         console.log("Mounted")
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.count != this.state.count) {
//              // console.log("Did Update")
//             const newColor = randomcolor()
//             // console.log(newColor)   
//             this.setState({color: newColor})
//         }
       
//     }

//     render() {
//         console.log("Render")
//         return (
//             <div>
//                 <h1 style={{color: this.state.color}}>{this.state.count}</h1>
//                 <button onClick={this.increment}>Change!</button>
//                 <button onClick={this.decrement}>
//                     Decrement!
//                 </button>
//             </div>
//         )
//     }
// }
// Lifecycle Methods Part 3 - componentDidUpdate

// React Conditional Render
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             isLoading: true
//         }
//     }

//     componentDidMount() {
//         console.log("Did Mount!")
//         setTimeout(() => {
//             this.setState({
//                 isLoading: false
//             })
//         }, 3000)
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.isLoading ? <h1>Loading...</h1> : <Conditional/>}
//             </div>
//         )
//     }
// }
// React Conditional Render

// React Conditional Render Part 2
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             unreadMessages: [
//                 "Call your mom!",
//                 "New spam email available. All links are definitely safe to click!"
//             ]
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {/* One way to check if unreadMessage is > 0 */}
//                 {/* {
//                     this.state.unreadMessages.length > 0 ? 
//                     <h2>You have {this.state.unreadMessages.length} unread messages</h2> :
//                     null
//                 } */}
                
//                 {/* Another more concise way to doing it */}
//                 { this.state.unreadMessages.length > 0 && 
//                     <h2>You have {this.state.unreadMessages.length} unread messages</h2> 
//                 }
//             </div>
//         )
//     }
// }
// React Conditional Render Part 2

// React Conditional Rendering Practice
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             isLoggedIn: false
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick() {
//         this.setState(prevState => {
//             return {
//                 isLoggedIn: !prevState.isLoggedIn
//             }
//         })
//     }

//     render() {
//         let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In"
//         let displayText = this.state.isLoggedIn ? "You're logged in." : "You're logged out"
//         return (
//            <div>
//                <button onClick={this.handleClick}>{buttonText}</button>
//                <h2>{displayText}</h2>
//            </div>
//         )
//     }
// }
// React Conditional Rendering Practice

// React Todo App: Phase 7
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             todos: todosData
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(id) {
//         this.setState(prevState => {
//             const updatedTodos = prevState.todos.map(todo => {
//                 if (todo.id === id) {
//                     return {
//                         ...todo, // this is the spread operator, which gets all properties of "todo" (3 lines above) and only makes a change to the "completed" field.
//                         completed: !todo.completed
//                     }
//                 }
//                 return todo
//             })
//             console.log(prevState.todos)
//             console.log(updatedTodos)
//             return {
//                 todos: updatedTodos
//             }
//         })
//     }

//     render() {
//         const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
//         return (
//             <div className="todo-list">
//                 {todoItems}
//             </div>
//         )
//     }
// }
// React Todo App: Phase 7

// Fetching data from an API with React
// https://swapi.dev/
// https://swapi.dev/api/people/4/
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             loading: false,
//             character: {}
//         }
//     }

//     componentDidMount() {
//         this.setState({loading: true})
//         fetch("https://swapi.dev/api/people/1/")
//         .then(response => response.json())
//         .then(data => {
//             this.setState({
//                 character: data,
//                 loading: !this.state.loading
//             })
//             // console.log(this.state.character)
//         })
//     }

//     render() {
//         const text = this.state.loading ? "loading..." : this.state.character.name
//         return (
//             <div>
//                 <h1>{text}</h1>
//             </div>
//         )
//     }
// }
// Fetching data from an API with React

// React Forms Part 1
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             firstName: "",
//             lastName: ""
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
    
//     // handleChange(event) {
//     //     this.setState({
//     //         [event.target.name]: event.target.value
//     //     })
//     // }

//     // Using React Synthetic Event Syntax
//     handleChange(event) {
//         const {name, value} = event.target
//         this.setState({
//             [name]: value
//         })
//     }

//     render() {
//         // console.log(this.state.firstName)
//         return (
//             <form>
//                 {/* Using the "value" parameter inside <input/> ensure you're getting the value from state as defined above. */}
//                 <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange}/>
//                 <br/>
//                 <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
//                 <h1>{this.state.firstName} {this.state.lastName}</h1>
//             </form>
//         )
//     }
// }
// React Forms Part 1

// React Forms Part 2
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             firstName: "",
//             lastName: "",
//             isFriendly: true,
//             gender: "",
//             favColor: "blue"
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
//     // We're using one handleChange to change state for all of the input elements.
//     handleChange(event) {
//         // each onChange event contains the parameters for the element that triggered the onChange event.
//         // you can pull out those parameters using the below syntax
//         // name, value, type, checked ... are all configured in the input elements in the form below.
//         const {name, value, type, checked} = event.target
//         type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
//     }
    
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input 
//                     type="text" 
//                     value={this.state.firstName} 
//                     name="firstName" 
//                     placeholder="First Name" 
//                     onChange={this.handleChange} 
//                 />
//                 <br />
//                 <input 
//                     type="text" 
//                     value={this.state.lastName} 
//                     name="lastName" 
//                     placeholder="Last Name" 
//                     onChange={this.handleChange} 
//                 /> 
//                 <br/>
//                 <textarea
//                     value={"Some defaul value"}
//                     onChange={this.handleChange}
//                 />
//                 <br/>
//                 <label>
//                     <input
//                         type="checkbox"
//                         name="isFriendly"
//                         checked={this.state.isFriendly}
//                         onChange={this.handleChange}
//                         />Is Friendly?
//                 </label>
//                 <br/>
//                 <label>
//                     <input
//                         type="radio"
//                         name="gender"
//                         value="male"
//                         checked={this.state.gender === "male"}
//                         onChange={this.handleChange}
//                         />Male
//                 </label>
//                 <br/>
//                 <label>
//                     <input
//                         type="radio"
//                         name="gender"
//                         value="female"
//                         checked={this.state.gender === "female"}
//                         onChange={this.handleChange}
//                     />Female
//                 </label>

//                 <select 
//                     value={this.state.favColor}
//                     onChange={this.state.handleChange}
//                     name="favColor"
//                     onChange={this.handleChange}
//                 >
//                     <option value="blue">Blue</option>
//                     <option value="green">Green</option>
//                     <option value="pink">Pink</option>    
//                 </select>
//                 <h1>{this.state.firstName} {this.state.lastName}</h1>
//                 <h2>You are a {this.state.gender} and your favorite color is {this.state.favColor}.</h2>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }
// React Forms Part 2
export default App