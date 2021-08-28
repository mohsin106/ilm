import React, {Component} from "react"
import Header from "./components/Header"
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
// import Coditional from "./components/Coditional"
import './style.css'
import { render } from "@testing-library/react"
import Form from "./components/FormContainer"
import MemeGenerator from "./components/MemeGenerator"
import { useState, useEffect } from "react"
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

// React Form Practice
// class App extends Component {

//     constructor() {
//         super()
//         this.state = {
//             firstName: "",
//             lastName: "",
//             age: "",
//             gender: "",
//             location: "",
//             veg: false,
//             kosher: false,
//             halal: false
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(event) {
//         const {name, value, type, checked} = event.target
//         let newData
//         type === "checkbox" ? 
//             this.setState(prevState => {
//                 return {
//                     [name]: checked
//                 }
                
//             }) 
//         : this.setState({[name]: value})
//     }
//     render() {
//         return(
//             <main>
//                 <form>
//                     <input 
//                         type="text"
//                         name="firstName" 
//                         onChange={this.handleChange} 
//                         placeholder="First Name"
//                     />
//                     <br/>
//                     <input 
//                         type="text"
//                         name="lastName" 
//                         onChange={this.handleChange} 
//                         placeholder="Last Name"
//                     />
//                     <br/>
//                     <input 
//                         type="text"
//                         name="age" 
//                         onChange={this.handleChange} 
//                         placeholder="Age"
//                     />
//                     <br/>
//                     Gender:
//                     <label>
//                      <input
//                          type="radio"
//                          name="gender"
//                          value="male"
//                          checked={this.state.gender === "male"}
//                          onChange={this.handleChange}
//                          />Male
//                     </label>
//                     <label>
//                      <input
//                          type="radio"
//                          name="gender"
//                          value="female"
//                          checked={this.state.gender === "female"}
//                          onChange={this.handleChange}
//                          />Female
//                     </label><br/>
//                     <select
//                         name="location"
//                         value={this.state.location}
//                         onChange={this.handleChange}
//                     >
//                         <option value="">-- Please select a location --</option>
//                         <option value="Bahamas">Bahamas</option>
//                         <option value="Turkey">Turkey</option>
//                         <option value="Dubai">Dubai</option>    
//                     </select>
//                     <br/>
//                     <label>
//                         <input
//                             type="checkbox"
//                             name="veg"
//                             checked={this.state.veg}
//                             onChange={this.handleChange}
//                             />Veg
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             name="kosher"
//                             checked={this.state.kosher}
//                             onChange={this.handleChange}
//                             />Kosher
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             name="halal"
//                             checked={this.state.halal}
//                             onChange={this.handleChange}
//                             />Halal
//                     </label>
//                     <br/>
//                     {/* <button onClick={() => alert({data =>})}>Submit</button> */}
//                     <h2>Entered information:</h2>
//                     <p>Your name: {this.state.firstName} {this.state.lastName}</p>
//                     <p>Your age: {this.state.age}</p>
//                     <p>Your gender: {this.state.gender}</p>
//                     <p>Your destination: {this.state.location}</p>
//                     <p>
//                         Your dietary restrictions: 
//                     </p>
//                     <p>Veg: {this.state.veg ? "Yes" : "No"}</p>
//                     <p>Kosher: {this.state.kosher ? "Yes" : "No"}</p>
//                     <p>Hala:{this.state.halal ? "Yes" : "No"}</p>
//                 </form>
//             </main>
//         )
//     }
// }
// React Form Practice

// React Container & Component Architecture
// function App() {
//     return(
//         <Form />
//     )
// }
// React Container & Component Architecture

// React Meme Generator Capstone Project
// function App() {
//     return(
//         <div>
//             <Header />
//             <MemeGenerator />
//         </div>
//     )   
// }
// React Meme Generator Capstone Project

// React Writing Modern React Apps
// this was just a lesson on some new things that are available with the new versions of React
    // ex: you can create the state variable outside of the constructor function
    // ex: you no longer need to bind handleClick/Change functions inside of the contructor when you start using arrow functions
    // have a look at the meme generator code above to see these new feature in action
// React Writing Modern React Apps

// Hooks Intro
// briefly described how the use of class components is being replaced with React Hook. This means you can use function call all through out your project.
// initially class compoenents were used to maintain state, but with Hooks you no longer need class componenets.
// Hooks Intro

// useState() Part1 - Creating state
// function App() {
//     // this returns an array called "value". It contains 2 indices. Index 0 contains the value "Yes", and index 1 contains a blank function.
//     // const value = useState("Yes")

//     // a better way to use state is to destructure the value array like this:
//     const [value] = useState("No")

//     // another example
//     const [age] = useState("40")
//     console.log(value)
//     return(
//         <div>
//             {/* <h1>Is state important to know? {value[0]}</h1> */}
//             {/* When you destructure the value array above, you then then simply just print value without providing an index. */}
//             <h1>Is state important to know? {value}</h1>
//             <h1>What is your age? {age}</h1>
//         </div>
//     )
// }
// useState() Part1 - Creating state

// useState() Part 2 - Changing State
// function App() {
//     const [count, setCount] = useState(0)

//     function increment() {
//         setCount(prevCount => prevCount + 1)
//     }
//     function decrement() {
//         setCount(prevCount => prevCount - 1)
//     }
//     return(
//         <div>
//             <h1>{count}</h1>
//             {/* This is one way to call the setCount function which gets the previous value of count and adds 1 to it. */}
//             {/* <button onClick={() => setCount(prevCount => prevCount + 1)}>Change</button> */}

//             {/* A different way to increment count. Here you call the increment function which does the increment and sets the new state of count */}
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }
// useState() Part 2 - Changing State

// useEffect() Part 1
// The useEffect() hook replaces three lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount)
// function App() {
//     const [count, setCount] = useState(0)
//     const [color, setColor] = useState("")

//     function increment() {
//         setCount(prevCount => prevCount + 1)
//     }
//     function decrement() {
//         setCount(prevCount => prevCount - 1)
//     }

//     // You can update the state of color when the component loads. You need to provide the second array parameter [count] so that the color only changes when the count changes. Otherwise you will get stuck in an infinte loop.
//     useEffect(() => {
//         setColor(randomcolor())
//     }, [count])

//      // If you want the color to change only once when the component loads, then remove any variables inside of the array parameter.
//      // This allows you to run code once for the first time when the component loads.
//     //  useEffect(() => {
//     //     setColor(randomcolor())
//     // }, [])

//     return(
//         <div>
//             <h1 style={{color: color}}>{count}</h1>
//             {/* This is one way to call the setCount function which gets the previous value of count and adds 1 to it. */}
//             {/* <button onClick={() => setCount(prevCount => prevCount + 1)}>Change</button> */}

//             {/* A different way to increment count. Here you call the increment function which does the increment and sets the new state of count */}
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }
// useEffect() Part 1

// useEffect() Part 2
// function App() {
//     const [count, setCount] = useState(0)
//     const [color, setColor] = useState("")
    
//     // You can have multiple useEffect() functions in your App. In this useEffect() function the setInterval function only loads once since the array[] object is empty.
//     // setInterval is used to run something on an interval basis. Here we're counting up by adding one to the previous state of count.
//     // setInterval also returns an ID that we're storing in the intervalId variable. This is used later to clean up the component.
//     // The return() code is used to unmount the component when/after its done running. This is for cleaning up your components.
//     // The clearInterval() function takes the intervalId and clears the setInterval() function after its done being used.
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCount(prevCount => prevCount + 1)
//         }, 1000)
//         return () => {
//             clearInterval(intervalId)
//         }
//         // Can also write the return function like this.
//         // return () => clearInterval(intervalId)
//     }, [])
    
//     useEffect(() => {
//         // We moved the setInterval function out from here because it was loading a new instance of setInterval everytime [count] changed. This caused the numbers to increase by more than one since there were multiple setInterval() functions running.
//         // setInterval(() => {
//         //     setCount(prevCount => prevCount + 1)
//         // }, 1000)
//         setColor(randomcolor())
//     }, [count])
    
//     return (
//         <div>
//             <h1 style={{color: color}}>{count}</h1>
//         </div>
//     )
// }
// useEffect() Part 2

// React Project Ideas for Practicing
// https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d

// https://medium.freecodecamp.org/want-to-build-something-fun-heres-a-list-of-sample-web-app-ideas-b991bce0ed9a

// https://medium.freecodecamp.org/summer-is-over-you-should-be-coding-heres-yet-another-list-of-exciting-ideas-to-build-a95d7704d36d
// // React Project Ideas for Practicing
export default App