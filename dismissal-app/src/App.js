import React, {Component, useEffect, useState} from "react"
import BuildStudents from "./components/BuildStudents"
import randomcolor from "randomcolor"
// const { Component, useEffect, useState } = require("react")


function App() {
    const [color, setColor] = useState("")
    const [students, setStudents] = useState([])
    const API_URL = `https://raw.githubusercontent.com/mohsin106/ilm/main/dismissal-app/students.json`
    
    useEffect(async () => {
      const response = await fetch(API_URL)
      const data = await response.json()
      const [item] = data.students
      setStudents(data)
      console.log(data)
    }, [])
    
    

    return (
        <div>
            <h1>Student name is {students}</h1>
        </div>
    )
}
export default App