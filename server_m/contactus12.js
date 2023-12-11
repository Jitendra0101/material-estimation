const mongoose = require("mongoose");
const Contactusschema=mongoose.Schema({
    fullname:String,
    email:String,
    descr:String,
  });

  mongoose.model("Contact_us", Contactusschema);  