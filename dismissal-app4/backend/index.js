import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import RestaurantsDAO from "./dao/restaurantsDAO.js"
import ReviewsDAO from "./dao/reviewsDAO.js"

/** 
 * the index.js is going to make the DB connection for you.
 * index.js will access your environment variables from your dotenv file*/ 

dotenv.config() // import your environment variables into your environment. You will access the variables from your doteve file later using the "process.env.VAR" syntax.

const MongoClient = mongodb.MongoClient

// access your PORT variable from the dotenv file which you imported earlier by doint dotenv.config()
// if the PORT variable can't be access use port 8000 instead
const port = process.env.PORT || 8000

// this is where you connect to the DB
MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    // pass in DB options
    {
        maxPoolSize: 50,   // limit 50 connections
        wtimeoutMS: 2500, // timeout in MS
        useNewUrlParser: true    // use to enable the parsing of the connection string
    }
)
// exit the process if error is detected
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    // how we get intial reference to the restaurants collection in the DB.
    await RestaurantsDAO.injectDB(client)
    await ReviewsDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})