const mysql = require('mysql')
const config = require('../config')
const fs = require('fs')
const path = require('path')

module.exports = function(app, connection) {
    var db = config.database
    /* API */

    /** 
     * Response all users' data
     * This API call was implemented for debugging
     * 
     */
    app.get('/', function(req, res){
        connection.query('SELECT * FROM `simple-tutorial`.user;', function(err, data) {
            (err)?res.send(err):res.json({users: data})
        })
        console.log("connection and query")
        //console.log(res)
    })

    /**
     * API call 'Home Page'
     * status: work
     */

    app.get('/api/home', (req, res) => {
        var sql  = 'SELECT * FROM `' + db + '`.friend;'
            sql += 'SELECT * FROM `' + db + '`.todo WHERE `remainDays` <= 3;'
            sql += 'SELECT * FROM `' + db + '`.tip;'
        connection.query(sql, (err, data) => {
            if(err) {
                throw err;
            } else {
                //console.log(data[0])
                //console.log(data[1])
                //console.log(data[2])
                res.send({data:data})
            }
        })
    })

    /**
     * API call 
     * Response specific friend's data by friendId
     * status: work
     */
    app.get('/friends/', (req, res) => {
        var friendId = req.query.friendId
        //var userId = req.params.userId // app.get('/users/:userId', ()=>)
        var sql = 'SELECT * FROM `' + db + '`.friend WHERE id = ' + connection.escape(friendId)
        connection.query(sql, (err, data) => {
            if(err){
                res.send(err)
            } else {
                var string = JSON.stringify(data)
                var json = JSON.parse(string)
                //console.log(json[0].profileImage)
                var imgPath = json[0].profileImage
                //console.log(imgPath)

                //res.sendFile(imgPath)
                res.json({users:data, profileImgPath:imgPath})
            }
            console.log(err, data)
        })
        //console.log(sql)
        //console.log("request db : " + db + " friendId : " + friendId)
    })

    /**
     * API call 'Friend Profile Image'
     * status: work
     */
    app.get('/friends/profile/:profileImgPath', (req, res) => {
        var profileImgPath = req.params.profileImgPath
        //console.log(profileImgPath)
        if(profileImgPath) res.sendFile(profileImgPath, { root: path.join(__dirname, '../public/images/profile/')})
        else res.status(404)
    })

    /**
     * API call 'Friends List'
     * status: work
     */
    app.get('/api/friends/list', (req, res) => {
        var sql = 'SELECT * FROM `' + db + '`.friend;'
        connection.query(sql, (err, data) => {
            if(err){
                res.send(err)
            } else {
                var string = JSON.stringify(data)
                var json = JSON.parse(string)
                var friends = []
                for(var i = 0; i<data.length; i++){
                    var f = {
                        id: json[i].id,
                        friendName: json[i].friendName,
                        friendProfileImage: json[i].friendProfileImage,
                    }
                    friends.push(f)
                    //∂console.log(json[i])
                }
                res.json({friendsList:friends})
            }
        })
    })
    /**
     * API call 'Friend Create'
     * status : work
     */
    app.post('/api/friends', (req, res) => {
        var sql = 'INSERT INTO `' + db + '`.friend (`friendName`, `friendProfileImage`, `sex`, `relation`, `birth`, `occupation`, `location`, `hobby`, `period`, `phoneNumber`, `status`, `activityScore`) VALUES (?);'
        var friendName = req.body.friendName
        var friendProfileImage = req.body.friendProfileImage
        var sex = req.body.sex
        var relation = req.body.relation
        var birth = req.body.birth
        var occupation = req.body.occupation
        var location = req.body.location
        var hobby = req.body.hobby
        var period = ''
        var phoneNumber = ''
        var status = 0
        var activityScore = 0

        if(req.body.period) period = req.body.period
        //if(req.body.schedule) schedule = req.body.schedule
        if(req.body.phoneNumber) phoneNumber = req.body.phoneNumber

        var values = [friendName, friendProfileImage, sex, relation, birth, occupation, location, hobby, period, phoneNumber, status, activityScore]
        console.log(values)
        connection.query(sql, [values], (err, result) => {
            if(err){
                res.send(err)
            } else {
                console.log(result)
                res.json({result: result})
            }
            console.log(err, result)
        })

    })

    /**
     * API call 'Schedule Creating'
     * status: work
     */
    app.post('/api/schedule/:friendId', (req, res) => {
        var frid = req.params.friendId
        var schedule = req.body.schedule
        //var scheduleName = req.body.scheduleName
        //var scheduleDate = req.body.scheduleDate
        //var isRepeatedSchedule = req.body.isRepeatedSchedule
        var sql = 'INSERT INTO `' + db + '`.schedule (frid, repeated, scheduleName, scheduleDate) VALUES ?;'
        //var values = [frid, isRepeatedSchedule, scheduleName, scheduleDate]
        var values = []
        for(var i=0; i<schedule.length; i++){
            var string = JSON.stringify(schedule[i])
            var json = JSON.parse(string)
            var v = [ frid, json.isRepeatedSchedule, json.scheduleName, json.scheduleDate ]
            console.log(v)
            values.push(v)
        }
        console.log(values)

        connection.query(sql, [values], (err, result) => {
            if(err) {
                res.send(err)
            } else {
                res.json({result: result})
            }
        })
    })

    /**
     * API call 'Friend Update'
     * status:
     */
    app.post('/api/friends/:friendId', (req, res) => {

    })
        
    /**
     * API call 'To Do List'
     * status: work
     */
    app.get('/api/todo/list', (req, res) => {
        var sql = 'SELECT * from `' + db + '`.todo;'
        connection.query(sql, (err, result) => {
            if(err) {
                res.send(err)
            } else {
                res.send(result)
            }
        })
    })

    /**
     * API call 'To Do List Yes' or 'To Do List No' 
     * status: work
     */
    app.post('/api/todo/:friendId/:toDoId', (req, res) => {
        var task = req.body.task
        var sql = ''
        var fid = req.params.friendId
        var tid = req.params.toDoId
        if(task==='yes'){
            sql = 'UPDATE `' + db + '`.todo SET `completed` = 1 WHERE `friendId` = ' + fid + ' AND `id` = ' + tid + ';'
            console.log(sql)
            connection.query(sql, (err, result) => {
                if(err){
                    res.send(err)
                } else {
                    res.send(result)
                }
            })
        } else if(task==='no') {
            sql = 'DELETE FROM`' + db + '`.todo WHERE `friendId` = ' + fid + ' AND `id` = ' + tid +  ';'
            console.log(sql)
            connection.query(sql, (err, result) => {
                if(err) {
                    res.send(err)
                } else {
                    res.send(result)
                }
            })
        } else {
            res.send('Wrong Access');
        }
    })

    /**
     * API call 'Activity'
     * status:
     */
    app.get('/api/activity', (req, res) => {

    })

    /**
     * API call 'Alerts'
     * status:
     */

    /**
     * API call 'Schedule Updating'
     * status:
     */

    /**
     * API call 
     * status: 
     */
}