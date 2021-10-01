import React, {useEffect, useState} from "react"
import "./App.css"
/* 
We're going to create a custom hook to load students.
*/
function App() {
    const [API_URL, setApiUrl] = useState("https://raw.githubusercontent.com/mohsin106/ilm/main/dismissal-app/students.json")
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(async () => {
        async function fetchData() {

        }
        try {  
            setLoading(true)
            const response = await fetch(API_URL)
            const data = await response.json()
            // console.log(data)
            setResults(
                data.students.map(item => {
                    return item
                })
            )
        } finally {
            setLoading(false)
        }
    }, [])




    useEffect(() => {
        fetch("https://swapi.dev/api/people/1/")
    })

    return (
        <div>
            {loading ? (
                <h1>loading...</h1>
            ) : (
                <table>
                    <thead>
                        <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map(item =>
                            <tr key={item.id}><td>{item.firstName}</td><td>{item.lastName}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default App