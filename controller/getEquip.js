let con = require('../sqlcon/mysql')

module.exports = function (app) {
  //con.con.connect()
  app.get('/getequip', function (req, res) {
    let sql = `select a.name as name,b.name as pname,c.name as dname,d.name as cname 
      from equip a,place b,dropaddr c,equip_class d 
      where a.placeid=b.id and a.dropaddr=c.id and a.cid=d.id `
    let reqs = req.query

    if (reqs.cid) {
      sql += ` and a.cid=${reqs.cid}`
    }

    if (reqs.pid) {
      sql += ` and a.placeid=${reqs.pid}`
    }

    if (reqs.did) {
      sql += ` and a.dropaddr=${reqs.did}`
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

  //con.con.end()

}

