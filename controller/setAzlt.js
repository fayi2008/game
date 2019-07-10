let con = require('../sqlcon/mysql')
let bodyParser = require('body-parser');

module.exports = function (app) {
  app.use(bodyParser.json());
  app.post('/setazlt', function (req, res,next) {

    let reqs = req.body
    console.log(reqs.cid)

    let sql = `insert into azlt (cid,name,descs,tid) values (${reqs.cid},"${reqs.name}","${reqs.descs}",${reqs.tid})`

    console.log(sql)
    con.con.query(sql, function (err, rows, fields) {
      console.log(rows)
      let ress = ''
      if (err) {
        ress = con.resbox({code: -1, msg: '查询失败'})
      } else {
        ress = con.resbox({data: rows})
      }

      res.send(ress)
    })


  })






}

