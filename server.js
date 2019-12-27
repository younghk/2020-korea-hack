const express = require('express')

const mysql = require('mysql')

const PORT = process.env.PORT || 3000

const app = express()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'koreahack1234',
    password: 'koreahack1234',
    database: 'simple-tutorial'
})

connection.connect(function(err){
    (err)? console.log(err): console.log(connection)
})

require('./routs/html-routs')(app)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})