const mongoose = require("mongoose");

const userSchema = new UserSchema ({

    firstName: {
        type: String,
        required: [true, "A First Name is required"]
    },

    lastName: {
        type: String,
    },

    username: {
        type: String,
        required: [true, "A Username is required"]
    },

    password: {
        type: Buffer,
        required: [true, "A Password is required"]
    },

    salt : {
        type: Buffer,
    },

    strategy : {
        type: String,
        required: [true]
    },
});

const User = mongoose.model("User", userSchema)

model.exports = User;