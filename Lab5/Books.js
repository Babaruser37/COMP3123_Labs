const express = require("express")
const router = express.Router()


router.route("/")
    .get((req, res) => {
        res.send("GET method was used - Get a random book")
    })

module.exports = router
