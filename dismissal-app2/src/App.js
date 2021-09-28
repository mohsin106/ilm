import React, {Component, useEffect, useState} from "react"
// import BuildStudents from "./components/BuildStudents"
// import randomcolor from "randomcolor"
// const { Component, useEffect, useState } = require("react")


function App() {
    const [color, setColor] = useState("")
    const [students, setStudents] = useState([])
    const [API_URL, setApiUrl] = useState("https://raw.githubusercontent.com/mohsin106/ilm/main/dismissal-app/students.json")

    useEffect(async () => {
      const response = await fetch(API_URL)
      const data = await response.json()
      const [item] = data.students
      // setStudents(data)
      // console.log(data)
    }, [])



    useEffect(() => {
        fetch("https://swapi.dev/api/people/1/")
    })
    return (
        <div>
            <h1 style={{color: color}}>code goes here</h1>
            <h1>Student name is {students}</h1>
        </div>
    )
}

export default App