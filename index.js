const express = require('express')
const router = require('./routes/router.js')
const app = express()

app.use(router)

app.listen(8000, () => {
    console.log("app run port 8000")
})