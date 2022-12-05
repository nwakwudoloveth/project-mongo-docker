const express = require('express')

const router = express.Router()
const User = require('../models/user')
const Product = require('../models/product')

router.get('/initialise', async function (req, res) {
  console.log('---------------------------')
  const shoe = new Product({ image: 'url', price: 1500, description: 'This is a good shoe' })
  shoe.save()
  const mariana = new User({ name: 'mariana', email: 'mariana@gmail.com', password: 'password' })
  const loveth = new User({ name: 'Loveth', email: 'loveth@gmail.com', password: 'password' })

  const zeynep = new User({ name: 'Zeynep', email: 'Zeynep@gmail.com', password: 'password' })

  zeynep.list(shoe)
  loveth.list(shoe)
  mariana.list(shoe)
  await mariana.save()
  await loveth.save()
  await zeynep.save()
  // const users = [mariana, loveth, zeynep]
  console.log(zeynep)
  console.log(loveth)
  console.log(mariana)
  res.sendStatus(200)
  // res.send(users)
})

// router.get('/', async function (req, res) {
//   const result = await User.find({})

//   // if (req.query.name) {
//   //   result = U.filter(user => user.name === req.query.name)
//   // }
//   res.send(result)
// })
router.get('/', async function (req, res) {
  const users = await User.find({})
  if (users) res.render('user', { users })
  else res.sendStatus(404)
  // res.send(users)
})

router.post('/', async function (req, res) {
  const { name, email, password } = req.body

  const user = await User.create({ name, email, password })
  res.send(user)
})
module.exports = router
