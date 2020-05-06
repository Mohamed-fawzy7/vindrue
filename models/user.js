const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, minLength: 3, maxLength: 255},
    firstName: { type: String, required: true, minLength: 3, maxLength: 20 },
    lastName: { type: String, required: true, minLength: 3, maxLength: 20 },
    password: { type: String, required: true, minLength: 8, maxLength: 255 },
    phone: { type: String, required: true, minLength: 8, maxLength: 20 },
    city: { type: String, required: true, minLength: 3, maxLength: 20 },
    country: { type: String, required: true, minLength: 3, maxLength: 20 },
    bio: { type: String, required: true, maxLength: 255 }
});
userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("User", userSchema);


