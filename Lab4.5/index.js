
const express = require("express")
const app = express()

const SERVER_PORT = process.env.PORT || 3000

// Serve static files
// The url of the webpage can be accessed through localhost:3000/static
app.use("/static", express.static("public"))
// Serve JSON
app.use(express.json())
// Read URL params or queries
// Extended true property in JSON object passed as arg to urlencoded lets us use our qs library
app.use(express.urlencoded({extended : true}))

app.get("/hello", (request, response) => {
    response.send("<h1>HELLO EXPRESS JS</h1>")
})

app.get("/user", (request, response) => {
    const fName = request.query.firstname ?? "Pritesh"
    const lName = request.query.lastname ?? "Patel"
    
    response.json(
        {
            firstname : fName,
            lastname : lName
        }
    )
})

app.post("/user/:firstname/:lastname", (request, response) => {
    if(!request.params.firstname || !request.params.lastname){
        return response.status(400).json({error : "Yoy must pass in first nameand lastname"})
    }

    const firstname = request.params.firstname
    const lastname = request.params.lastname
    
    response.json({
        firstname : firstname,
        lastname : lastname
    })
})

app.post("/users", (request, response) => {
    if(!request.body){
        return response.status(400).json({error : "Must pass arr in request body"})
    }

    const arr = request.body

    response.json(arr)
})


app.listen(SERVER_PORT, () => { 
    console.log("Server is running on http://localhost:" + SERVER_PORT);
})