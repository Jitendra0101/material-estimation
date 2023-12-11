const mongoose = require("mongoose");
const detailschema=mongoose.Schema({
  name:String,
  area:Number,
  cararea:Number,
  compoundfeet:Number,
  balcony:Number,
})
const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    password: String,
    details:[detailschema]
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);