const mongoose = require('mongoose')

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
const dbName = process.env.MONGODB_DATABASE || 'mongodb://127.0.0.1:27017'

mongoose.set('debug', true)

mongoose
  .connect(`mongodb+srv://${username}:${password}@cluster0.1hrf2s4.mongodb.net/${dbName}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection established'))
  .catch(console.log)
