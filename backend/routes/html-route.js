const mysql = require('mysql')
const config = require('../config')
const fs = require('fs')
const path = require('path')
const upload = require('./fileupload');

const multer = require('multer')

module.exports = function(app, connection) {
    var db = config.database
    /* API */

    /** 
     * Response all users' data
     * This API call was implemented for debugging
     * 
     */
    app.get('/', function(req, res){
       res.send('hell world!')
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
                res.send({users:data[0], todos:data[1], tips:data[2]})
            }
        })
    })

    /**
     * API call 
     * Response specific friend's data by friendId
     * status: work
     */
    app.get('/api/friends/profile/:friendId', (req, res) => {
        //var friendId = req.query.friendId
        var friendId = req.params.friendId // app.get('/users/:userId', ()=>)
        var sql = 'SELECT * FROM `' + db + '`.friend WHERE id = ' + connection.escape(friendId)
        connection.query(sql, (err, data) => {
            if(err){
                res.send(err)
            } else {
                var string = JSON.stringify(data)
                var json = JSON.parse(string)
                console.log(json[0].profileImage)
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
    app.get('/api/friends/profileimage/:profileImgPath', (req, res) => {
        var profileImgPath = req.params.profileImgPath
        //console.log(profileImgPath)
        if(profileImgPath){
            console.log(res)
            res.sendFile(profileImgPath, { root: path.join(__dirname, '../public/images/profile/')})
        }
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
        console.log('req.body:', req.body);
        var values = [friendName, friendProfileImage, sex, relation, birth, occupation, location, hobby, period, phoneNumber, status, activityScore]
        console.log('values:', values)
        connection.query(sql, [values], (err, result) => {
            if(err){
                res.send(err)
            } else {
                //console.log(result)
                // add file write code here
                res.json({result: result})
            }
            console.log(err, result)
        })

    })

    /**
     * API call 'Write Profile Image File'
     * status: work
     */
    app.post('/api/test/file', (req, res, next) => {
        //console.log(req)
        upload(req, res, function(err) {
            if (err instanceof multer.MulterError) {
              return next(err);
            } else if (err) {
              return next(err);
            }
            console.log(req.file)
            console.log('원본파일명 : ' + req.file.originalname)
            console.log('저장파일명 : ' + req.file.filename)
            console.log('크기 : ' + req.file.size)
            // console.log('경로 : ' + req.file.location) s3 업로드시 업로드 url을 가져옴
            return res.json({success:1});
          });
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
            connection.query(sql, (err, result1) => {
                if(err){
                    res.send(err)
                } else {
                    // add this function into the api-todo-yes
                    // status: work
                    var text = tid + ' has been done.'
                    var completeDate = '2020-01-04'
                    var sql = 'INSERT INTO `' + db + '`.activity (`text`, `fid`, `completeDate`) VALUES (?);'
                    var values = [text, fid, completeDate]
                    console.log(sql, values)
                    connection.query(sql, [values], (err, result2) => {
                        if(err) {
                            res.send(err) 
                        } else {
                            res.send({result1: result1, result2:result2})
                        }
                    })
                    //res.send(result)
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
     * API call 'Tip'
     * status: work
     */

    app.get('/api/tip/image/:tipImgPath', (req, res) => {
        var tipImgPath = req.params.tipImgPath
        if(tipImgPath) res.sendFile(tipImgPath, { root: path.join(__dirname, '../public/images/tip/')})
        else res.status(404)
    })


    // need to create info table in db first.
    app.post('/api/friends/:friendId', (req, res) => {
        var sql = 'INSERT INTO `' + db + '`.info;'
        connection.query(sql, (err, result) => {
            if(err){
                res.send(err)
            } else {
                res.send(result)
            }
        })
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