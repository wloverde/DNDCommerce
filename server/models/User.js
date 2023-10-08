const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const orderSchema = require('./Order');

// Schema for User Model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        }, 
        password: {
            type: String,
            required: true
        },
        orders: [orderSchema],
    },
    {
        toJSON: {
            virtuals: true,
          },
    }
);

// hashes password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // validates password
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
   
  
  const User = model('User', userSchema);
  
  module.exports = User;
  