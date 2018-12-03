// import dependency
const express = require('express')
const execQuery = require('../db.js')
const router = express.Router()

/**
 * 회원등록 : 최초 로그인 시 회원 등록.
 */
router.post('', async (request, response) => {
  const data = request.body
  const chk = `select count(*) as cnt from member where email = ?`
  const sql = `INSERT INTO member SET ?, reg_date = now()`

  try {
    // 회원 정보 가져오기
    let result = await execQuery(chk, [data.email])

    // 최초 로그인시 회원 정보 등록
    if (result[0].cnt === 0)
      await execQuery(sql, data)

    // 회원 정보 반환
    result = await execQuery('SELECT * FROM member where email = ?', [data.email])
    response.json({success: true, member: result[0]})
  } catch (err) {
    // 에러 발생
    response.json({success: false, err})
  }
})

router.get('', (request, response) => {
  response.json({data: 'test'})
})

module.exports = router