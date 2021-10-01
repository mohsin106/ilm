import React, {useEffect, useState} from "react"
import "./App.css"
/* 
We're going to create a custom hook to load students.
*/
function App() {
    const [API_URL, setApiUrl] = useState("https://raw.githubusercontent.com/mohsin106/ilm/main/dismissal-app/students.json")
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [inputText, setInputText] = useState("")

    useEffect(() => {
        async function fetchData() {
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
        }
        fetchData()
    }, [])

    function handleChange(e) {
        setInputText(e.target.value)
        // console.log(inputText)
        // console.log(e)
    }

    function handleClick (obj) {
        console.log(`button ${obj.id} was clicked for ${obj.firstName}`)
    }


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
                            <tr key={item.id}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td><button
                                        name={item.id}
                                        onClick={() => handleClick(item)}
                                    >ready for pickup
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
            <textarea
                name="textArea"
                value={inputText}
                onChange={handleChange}
            />
        </div>
    )

}

export default App