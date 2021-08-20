import React from "react"

function Product(props) {
    return (
        <div>
            <p>Name: {props.product.name}</p>
            <p style = {{color: props.product.price <= 0 ? "green" : "blue"}}>Price: {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD"})}</p>
            <p>Desc: {props.product.description}</p>
            <hr></hr>
        </div>
    )
}
export default Product