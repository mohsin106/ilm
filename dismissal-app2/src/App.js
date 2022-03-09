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
                    data.carTags.map(item => {
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
        const {value} = e.target
        setInputText(value)
        // console.log(inputText)
        // console.log(e)
    }

    function handleClick (obj) {
        for (let i = 0; i < obj.children.length; i++) {
            // console.log(obj.children[i])
            const {fName, lName, grade} = obj.children[i]
            console.log(fName,lName, grade)
        }
    }

    // console.log(results)
    return (
        <div>
            {loading ? (
                <h1>loading...</h1>
            ) : (
                <table>
                    <thead>
                        <tr>
                        <th>Car Tag</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map(item =>
                            <tr key={item.tagID}>
                                <td>{item.tagID}</td>
                                <td>{item.children.lName}</td>
                                <td><button
                                        name={item.tagID}
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
            <h2>{inputText}</h2>
        </div>
    )

}

export default App