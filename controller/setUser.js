let con = require('../sqlcon/mysql')
let bodyParser = require('body-parser');

module.exports = function (app) {
  app.use(bodyParser.json());
  app.post('/setuser', function (req, res,next) {

    let sql = `insert into user (username,pwd) values (?,?)`
    let param=[req.param('username'),req.param('pwd')];

    if(!req.param('username')){
      res.send(con.resbox({code: -1, msg: '账号请勿为空'}))
      return
    }
    if(!req.param('pwd')){
      res.send(con.resbox({code: -1, msg: '密码请勿为空'}))
      return
    }

    con.con.query(sql,param, function (err, rows) {
      console.log(err)
      let ress = ''
      if (err) {
        if(err.errcode=='1062'){
          ress = con.resbox({code: -1, msg: '已存在账号'})
        }else{
          ress = con.resbox({code: -1, msg: '查询失败'})
        }

      } else {
        ress = con.resbox({data: rows})
      }

      res.send(ress)
    })


  })






}

