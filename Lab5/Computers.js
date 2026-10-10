const express = require("express")
const router = express.Router()

router.route("/java")
    .post((req, res) => {
        res.send("POST method was used - /books/computer/java")
    })

    router.route("/python")
    .put((req, res) => {
        res.send("PUT method was used - /books/computer/python  ")
    })

    router.route("/game-dev")
    .get((req, res) => {
        res.send("GET method was used - /books/computer/game-dev ")
    })

module.exports = router
