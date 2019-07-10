let con = require('../sqlcon/mysql')

module.exports = function (app) {

  app.get('/getazltclass', function (req, res) {
    let sql = `select * 
      from azlt_class`

    con.con.query(sql, function (err, rows, fields) {

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

