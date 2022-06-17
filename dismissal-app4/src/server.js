const express = require('express')
const bodyParser = require('body-parser')

const fs = require('fs')
const morgan = require('morgan') // not necessary, provides monitoring capabilities
const cors  = require('cors')

// Declare app
const app = express()
const port = 5001

// middlewares
app.use(bodyParser.json)
app.use(morgan('dev'))
app.use(cors())

// default route
// app.get('/', (req, res) => res.status(200).send({
//     message: "servier is running..."
// }))

app.get('/', function (req, res, next) {  
    res.send('Welcome to JavaTpoint!');  
  });  

const WriteTextToFileAsync = async (contentToWrite) => {
    fs.writeFile('./src/newFile.json', contentToWrite, (err) => {
        console.log(contentToWrite)
        if (err) {
            console.log(err)
        } else {
            console.log("write successful")
        }
    })
}

// declare write route for writing data to file
app.post('/write', async (req, res, next) => {
    // take the body from incoming request and convert to string
    const requestContent = JSON.stringify(req.body)
    await WriteTextToFileAsync(requestContent)
})

// 404 error message for route
app.use((req, res, next) => res.status(404).send({
    message: "could not find requested route"
}))

// run server
app.listen(5001, () => {
    console.log(
        `
        !!! Server is running
        !!! listening for incoming requests on port ${port}
        `
    )
})