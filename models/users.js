import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    full_name: { 
      type: String, 
      required: true,
      default: ""
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // Fix typo in `lowecase`
      validate: {
        validator: function (v) {
          return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
      default: ""
    },
    password: { 
      type: String, 
      required: [true, 'Password is required'], 
      minlength: [8, 'Password must be at least 8 characters long'],
      default: ""
    },
  },
  { collection: "users", timestamps: true }
);



// **Hash Password before saving into database
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model("User", userSchema);
export default User;
