let con = require('../sqlcon/mysql')

module.exports = function (app) {
  //
  app.get('/getpro', function (req, res) {
    let sql = `select * from pro`

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
  //

}

