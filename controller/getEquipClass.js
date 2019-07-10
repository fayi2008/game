let con = require('../sqlcon/mysql')

module.exports = function (app) {
  //con.con.connect()
  app.get('/getequipclass', function (req, res) {
    let sql = `select * 
      from equip_class`

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
  //con.con.end()

}

