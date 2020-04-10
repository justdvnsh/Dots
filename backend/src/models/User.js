const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    branch: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre("save", async function(next) {
    try {
      if (!this.isModified("password")) {
        return next();
      }
      let hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
      return next();
    } catch (err) {
      return next(err);
    }
  });

UserSchema.methods.comparePassword = async (candidatePassword, next) => {
    try {
        let isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (e) {
        return next(err);
    }
}

module.exports = mongoose.model("User", UserSchema);
