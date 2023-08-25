const express = require("express")
const dotenv = require("dotenv").config()
const bodyParser = require("body-parser")
const errorHandler = require("./middleware/errorHandler")
const sequelize = require("./database/db")

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use('/todo', require('./routes/routes'))
// app.use(errorHandler)

sequelize
.sync()
.then(result => {
    // console.log(result)
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
})
.catch(err => {
    console.log(err)
})

