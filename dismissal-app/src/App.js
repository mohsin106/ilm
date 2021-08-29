import React, {Component, useEffect, useState} from "react"
import randomcolor from "randomcolor"
// const { Component, useEffect, useState } = require("react")


function App() {
    const [color, setColor] = useState("")
    const [students, setStudents] = useState([])
    useEffect(() => {
        setColor(randomcolor())
    }, [])

    useEffect(() => {
        fetch("https://swapi.dev/api/people/1/")
    })
    return (
        <div>
            <h1 style={{color: color}}>code goes here</h1>
        </div>
    )
}
export default App