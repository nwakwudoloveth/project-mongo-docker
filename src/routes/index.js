const express = require('express')

const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: `Coyotiv's Express starter Template` })
})

module.exports = router
