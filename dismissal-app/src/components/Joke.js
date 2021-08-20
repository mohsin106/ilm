import React from "react"

function Joke(props) {
    console.log(props)
 
    return(
        <div>
            <p style={{display: props.question ? "block" : "none"}}>Question: {props.question}</p>
            <p style={{backgroundColor: props.question ? "green" : "gray"}}>Punchline: {props.punchLine}</p>
            <hr/>
        </div>
    )
}
export default Joke