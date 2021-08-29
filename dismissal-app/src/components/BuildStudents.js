import react from "react"
function BuildStudents(props) {
    return (
        <div>
            <h2>BuildStudents code</h2>
            <h3>Student: </h3>
            {console.log(props.students.id)}
        </div>
    )
}
export default BuildStudents