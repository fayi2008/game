let con = require('../sqlcon/mysql')

module.exports = function (app) {

  app.get('/getuser', function (req, res) {
    let sql = `SELECT * FROM USER WHERE 1=1`

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

