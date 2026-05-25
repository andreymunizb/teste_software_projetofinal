const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('API base funcionando')
})

module.exports = router