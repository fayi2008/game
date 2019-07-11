let con = require('../sqlcon/mysql')
let bodyParser = require('body-parser');

module.exports = function (app) {
  app.use(bodyParser.json());
  app.get('/setuser', function (req, res,next) {

    let reqs = req
    console.log(req.param('username'))

    let sql = `insert into user (username,pwd) values (?,?)`
    let  addSqlParams = [req.param('username'),req.param('pwd')];
    console.log(sql)
    con.con.query(sql,addSqlParams, function (err, rows) {

      let ress = ''
      if (err) {
        console.log(err.errno)
        if(err.errno=='1062'){
          ress = con.resbox({code: -1, msg: '已存在账号'})

        } else{
          ress = con.resbox({code: -1, msg: '查询失败'})
        }

      } else {
        console.log(rows)
        ress = con.resbox({data: rows})
      }

      res.send(ress)
    })


  })






}

