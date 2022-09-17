import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express()

// apply middleware
app.use(cors())
app.use(express.json())  // this line replaces body-parser library (it allows get and post requests and reads the json)

// every route is going to start with "/api/v1/restaurants"
app.use("/api/v1/restaurants", restaurants) // (when user goes to the "restaurants" path, use the restaurants file that contains the routes for this request to guide the user)
app.use("*", (req, res) => res.status(404).json({error: "not found"})) // when user goes to a path that doesn't exist, display 404 "not found" message, the * refers to any unknown route

export default app  // we're exporting app as a module, we'll be able to then import this module in the file that accesses the database which is also the file you run to get the server running.
                    // this helps us to separate our server code from the database code.