const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Schema for User Model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },

        password: {
            type: String,
            required: true,
            minlength: 8,
        },
        orders: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Order'
            }
        ],

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


const User = model('user', userSchema);

module.exports = User;
