let con = require('../sqlcon/mysql')

module.exports = function (app) {

  app.get('/getazltby', function (req, res) {
    let sql = `select* from (SELECT a.*,
       c.name AS tname,
       b.id as cid,
       b.name AS cname,
       c.id as tid
       c.pid as pid,
       d.name AS pname
       FROM   azlt a
       JOIN azlt_class b
         ON a.cid = b.id
       LEFT JOIN tianfu c
         ON a.tid = c.id
       LEFT JOIN pro d
         ON c.pid = d.id) a where 1=1`

    let reqs = req.query

    if (reqs.cid) {
      sql += ` and a.cid=${reqs.cid}`
    }

    if (reqs.pid) {
      sql += ` and a.pid=${reqs.pid}`
    }

    if (reqs.tid) {
      sql += ` and a.tid=${reqs.tid}`
    }

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

