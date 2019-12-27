const mysql = require('mysql')

module.exports = function(app, connection) {
    app.get('/users', function(req, res){
        connection.query('SELECT * FROM `simple-tutorial`.user;', function(err, data) {
            (err)?res.send(err):res.json({users: data})
        })
        console.log("connection and query")
        //console.log(res)
    })
}