const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()
const bodyParser = require("body-parser")
const errorHandler = require("./middleware/errorHandler")
const sequelize = require("./database/db")

const app = express()
const port = process.env.PORT || 5000
app.use(cors());
app.use(bodyParser.json())
app.use('/todo', require('./routes/routes'))
app.use(errorHandler)

sequelize
    .sync()
    .then(result => {
        // console.log(result)
        app.listen(port, '0.0.0.0', () => {
            console.log('Server running...');
        });
    })
    .catch(err => {
        console.log(err)
    })

