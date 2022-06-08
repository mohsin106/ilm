import React, {useEffect, useState, useRef} from "react"
import "./App.css"
import { TblFunc } from "./TblFunc"
import Button from "./Button"
/* 
We're going to create a custom hook to load students.
*/

function App() {
    const [studentTableData, setStudentTableData] = useState([])
    const [API_URL, setApiUrl] = useState("https://raw.githubusercontent.com/mohsin106/ilm/main/dismissal-app/students2.json")
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [inputText, setInputText] = useState("")
    const [buttons, setButtons] = useState([])
    const buttonRef = useRef(null)

    function test() {
        alert("hello from test function")
    }

    useEffect(() => {
        async function getCarTags() {
            try {  
                setLoading(true)
                const response = await fetch(API_URL)
                const data = await response.json()
                
                const _data = []
                const _button = ""
                const _tagIDs = data.carTags.map( studentInfo => {
                    _data.push([studentInfo.tagID, 
                        studentInfo.fName, 
                        studentInfo.lName,
                        studentInfo.grade,
                        "<button onclick={alert('button_clicked')}>Click Me</button>"]
                    )
                    
                })
                // console.log((JSON.stringify(_tagIDs)))
                console.log((JSON.stringify(_data)))
                setStudentTableData(_data)
                setButtons(_tagIDs)
            } finally {
                setLoading(false)
            }
        }
        getCarTags()
    }, [])

    // console.log(studentTableData)
    // console.log((JSON.stringify(studentTableData)))

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
        // <div>
        //     {loading ? (
        //         <h1>loading...</h1>
        //     ) : (
        //         <table>
        //             <thead>
        //                 <tr>
        //                 <th>Car Tag</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {results.map(item =>
        //                     <tr key={item.tagID}>
        //                         <td>{item.tagID}</td>
        //                         <td>{item.children.lName}</td>
        //                         <td><button
        //                                 name={item.tagID}
        //                                 onClick={() => handleClick(item)}
        //                             >ready for pickup
        //                             </button>
        //                         </td>
        //                     </tr>
        //                 )}
        //             </tbody>
        //         </table>
        //     )}
        //     <textarea
        //         name="textArea"
        //         value={inputText}
        //         onChange={handleChange}
        //     />
        //     <h2>{inputText}</h2>
        // </div>

        <main>
            <TblFunc data={studentTableData} />
            
        </main>
    )

}

export default App