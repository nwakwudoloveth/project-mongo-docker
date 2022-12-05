const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,

    required: true,
  },
  email: {
    type: String,

    required: true,
  },
  password: {
    type: String,
  },
  cart: [],
  order: [],
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      autopopulate: true,
    },
  ],
})

class User {
  get profile() {
    return this.name + this.email + this.password
  }

  list(newProduct) {
    this.products.push(newProduct)
  }

  // addToCart() {}

  // deleteFromCart() {}

  // search() {}

  viewOffers() {
    return this.products
  }

  deleteOffer() {
    return this.products
    // look for a method that deletes item in array
  }
}

UserSchema.loadClass(User)
UserSchema.plugin(autopopulate)

module.exports = mongoose.model('User', UserSchema)
