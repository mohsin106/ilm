import React from "react"

function Conditional(props) {
    console.log(props.isLoading)
    return (
        <div>
            <h1>Navbar</h1>
            {/* When you are passing props to the Conditional Component */}
            {/* {props.isLoading === true ? <h1>Loading...</h1> : <h1>Done Loading!</h1>} */}
            {/* {props.isLoading ? <h1>Loading...</h1> : <h1>Done Loading!</h1>} */}
            {/* If you're handling the condition in App.js then just render "Done Loading!" */}
            <h1>Done Loading!</h1>
            <h1>Footer</h1>
        </div>
    )
}
export default Conditional