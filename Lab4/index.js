/*
Purpose:
- Serve multiple paths from an Express server using routes
- Serve a static file
- Extract GET params (compate with GET querey)
 */

const express = require("express")
const app = express()

const SERVER_PORT = process.env.PORT || 3000

// -------------SET UP MIDDLEWARE FOR EXPRESS-----------------
// Serve static files
// The url of the webpage can be accessed through localhost:3000/static
app.use("/static", express.static("public"))
// Serve JSON
app.use(express.json())
// Read URL params or queries
// Extended true property in JSON object passed as arg to urlencoded lets us use our qs library
app.use(express.urlencoded({extended : true}))
// ------------------------------------------------------------
app.get("/", (request, response) => {
    response.send("<h1>Welocome to the root of the server - using GET method</h1>")
})

app.get("/Hello", (request, response) => {
    response.status(200).send("<h1>Welocome to the /Hello of the server - using GET method</h1>")
})

app.get("/College", (request, response)=> {
    const college = {
        name : "George Brown Polytechnic",
        location : "Toronto",
        established : 1967
    }
    response.json(college)
})

app.get("/student", (request, response) => {
    if(!request.query.name || !request.query.age){
        return response.status(400).json({error : "Missing query parameters"})
    }
    console.log(request.query);
    const name = request.query.name
    const age = request.query.age

    response.json({
        student_name : name,
        student_age : age
    })
})

app.get("/student/:name/:age", (request, response) => {
    console.log(request.params);

    if(!request.params.name || !request.params.age){
        return response.status(400).json({error : "Yoy must pass in name and age"})
    }

    const name = request.params.name
    const age = request.params.age
    
    response.json({
        student_name : name,
        student_age : age
    })
})

app.post("/student", (request, response) => {
    const student = request.body
    console.log(student);

    const {name, age} = student //destructuring

    if (!student.name || !student.age){//verification of post body data
        return response.status(400).json({error : "Missing name or age in body"})
    }

    response.json({
        student_name : name,
        student_age : age
    })
})

app.listen(SERVER_PORT, () => { 
    console.log("Server is running on http://localhost:" + SERVER_PORT);
})