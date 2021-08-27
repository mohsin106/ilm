import React from "react"

function FormComponent(props){
    return(
        <main>
            <form>
                <input 
                    type="text"
                    name="firstName" 
                    onChange={props.handleChange} 
                    placeholder="First Name"
                />
                <br/>
                <input 
                    type="text"
                    name="lastName" 
                    onChange={props.handleChange} 
                    placeholder="Last Name"
                />
                <br/>
                <input 
                    type="text"
                    name="age" 
                    onChange={props.handleChange} 
                    placeholder="Age"
                />
                <br/>
                Gender:
                <label>
                 <input
                     type="radio"
                     name="gender"
                     value="male"
                     checked={props.gender === "male"}
                     onChange={props.handleChange}
                     />Male
                </label>
                <label>
                 <input
                     type="radio"
                     name="gender"
                     value="female"
                     checked={props.gender === "female"}
                     onChange={props.handleChange}
                     />Female
                </label><br/>
                <select
                    name="location"
                    value={props.location}
                    onChange={props.handleChange}
                >
                    <option value="">-- Please select a location --</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Dubai">Dubai</option>    
                </select>
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="veg"
                        checked={props.veg}
                        onChange={props.handleChange}
                        />Veg
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="kosher"
                        checked={props.kosher}
                        onChange={props.handleChange}
                        />Kosher
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="halal"
                        checked={props.halal}
                        onChange={props.handleChange}
                        />Halal
                </label>
                <br/>
                {/* <button onClick={() => alert({data =>})}>Submit</button> */}
                <h2>Entered information:</h2>
                <p>Your name: {props.firstName} {props.lastName}</p>
                <p>Your age: {props.age}</p>
                <p>Your gender: {props.gender}</p>
                <p>Your destination: {props.location}</p>
                <p>
                    Your dietary restrictions: 
                </p>
                <p>Veg: {props.veg ? "Yes" : "No"}</p>
                <p>Kosher: {props.kosher ? "Yes" : "No"}</p>
                <p>Hala:{props.halal ? "Yes" : "No"}</p>
            </form>
        </main>
    )
}

export default FormComponent