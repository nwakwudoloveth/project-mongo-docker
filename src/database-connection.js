const mongoose = require('mongoose')

// eslint-disable-next-line prefer-const
let connectionString = process.env.MONGODB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017'

mongoose.set('debug', true)

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection established'))
  .catch(error => console.log('not connected:', error))
