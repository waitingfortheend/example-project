const express = require('express')
const path = require('path')
const app = express()

const indexPage = path.join(__dirname, "templates/index.html")
const loginPage = path.join(__dirname, "templates/login.html")

app.get("/", (req, res) => {
    res.status(200)
    res.type('text/html')
    res.sendFile(indexPage)
})

app.get("/login", (req, res) => {
    res.status(200)
    res.type('text/html')
    res.sendFile(loginPage)
})


app.listen(8000, () => {
    console.log("app run port 8000")
})