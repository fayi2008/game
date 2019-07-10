let con = require('../sqlcon/mysql')

module.exports = function (app) {

  app.get('/getazlt', function (req, res) {
    let sql = `SELECT a.*,
       c.name AS tname,
       b.name AS cname,
       c.pid,
       d.name AS pname
       FROM   azlt a
       JOIN azlt_class b
         ON a.cid = b.id
       LEFT JOIN tianfu c
         ON a.tid = c.id
       LEFT JOIN pro d
         ON c.pid = d.id`

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

