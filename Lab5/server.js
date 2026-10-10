const express = require("express")
const fs = require("fs")
const df = require("dateformat").default

const books = require("./Books.js")
const computers = require("./Computers.js")

const app = express()
const router = express.Router()

let writeData = (data) => {
    data += "\r\n"
    fs.appendFile("server_log.txt", data, (error) => {
        if(error){
            throw error
        }
        console.log("Logs saved");
    })
}

let logger = (req, res, next) => {
    const today = df(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT")
    let data = `[${today} ${req.originalUrl}]`
    writeData(data)
    next()
}

app.use(logger)

let booksLogger = (req, res, next) => {
    console.log("Books logger called");
    next()
}

let computersLogger = (req, res, next) => {
    console.log("Computer logger called");
}
app.use("/books", booksLogger, books)
app.use("/books/computers", computers)

app.use("/", router)
app.listen(8081, () => console.log("Server running on port 8081"))

