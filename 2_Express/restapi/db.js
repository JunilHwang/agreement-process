const mysql = require('mysql')

// variable setting
const con = mysql.createConnection({
  host: '220.149.235.59',
  user:'agreement_process',
  password:'ia624624!!',
  database:'agreement_process'
})

const query = (sql, bind) => new Promise((resolve, reject) => {
  con.query(sql, bind, (err, result) => {
    if (err) reject(err)
    else resolve(result)
  })
})

module.exports = query