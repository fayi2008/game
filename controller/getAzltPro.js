let con = require('../sqlcon/mysql')

module.exports = function (app) {
  let res1 = []

  app.get('/getazltpro', function (req, res, next) {
    let sql = `select * 
      from tianfu where 1=1 `

    let reqs = req.query
    if (reqs.pid) {
      sql += ` and pid=${reqs.pid} or pid=1`
    }

    con.con.query(sql, function (err, rows, fields) {


      if (err) {

      } else {
        res1 = [...rows]
      }

      next()

    })
  }, function (req, res, next) {
    let ress = ''

    if (res1.length) {
      let i=0
      res1.forEach(function (item) {

        let sql = `select *
                   from Azlt where 1=1 and tid=${item.id} and cid=3`
//
        con.con.query(sql, function (err, rows, fields) {

          item['list']=[...rows]
          i++
          if(i==res1.length){
            console.log(res1)

            ress = con.resbox({data: res1})

            res.send(ress)
          }
        })
//
      })




    }

  })


}

