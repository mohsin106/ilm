import React, {Component} from "react";
import FormComponent from "./FormComponent"

// focus on busines logic to display the form code
class Form extends Component {

    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            location: "",
            veg: false,
            kosher: false,
            halal: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        let newData
        type === "checkbox" ? 
            this.setState(prevState => {
                return {
                    [name]: checked
                }
                
            }) 
        : this.setState({[name]: value})
    }
    render() {
        return(
            <FormComponent 
                handleChange={this.handleChange}
                // you can pass all state data in an object called "data", then reference the fields using "props.data.firstName" inside of FormComponents.js
                // data={this.state}
                // or you can use the spread "..." operator to pass all state object to FormComponents.js and access the fields using props.firstName.
                {...this.state}
            />
        )
    }
}
export default Form
