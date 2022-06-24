import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express()

// apply middleware
app.use(cors())
app.use(express.json())  // this line replaces body-parser library (allow get and post requests)

// every route is going to start with "/api/v1/restaurants"
app.use("/api/v1/restaurants", restaurants) // (when user goes to the "restaurants" path, use the restaurants file that contains the routes for this request to guide the user)
app.use("*", (req, res) => res.status(404).json({error: "not found"})) // when user goes to a path that doesn't exist, display 404 "not found" message

export default app