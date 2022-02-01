const express = require('express')
const router = express.Router()
const path = require('path')

// const indexPage = path.join(__dirname, "../templates/index.html")
// const loginPage = path.join(__dirname, "../templates/login.html")

// router.get("/", (req, res) => {
//     res.status(200)
//     res.type('text/html')
//     res.sendFile(indexPage)
// })

// router.get("/login", (req, res) => {
//     res.status(200)
//     res.type('text/html')
//     res.sendFile(loginPage)
// })

// router.get("/register/:id", (req, res) => {
//     const product_id = req.params.id
//     if (product_id === "1") {
//         res.sendFile(path.join(__dirname, "../templates/index.html"))
//     }
//     res.send(`<h1>send ${product_id} </h1>`)



// })

module.exports = router