let mysql = require('mysql')

let connection = mysql.createConnection({
  host: '116.62.150.180',
  user: 'fay',
  password: 'yang0313',
  database: 'game1'
})
connection.connect()
module.exports = {
  con: connection, resbox: function ({code = 0, data = '', msg = '成功'}) {
    let codes = {
      code: code,
      data: data,
      msg: msg
    }
    return codes
  }
}
