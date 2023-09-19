const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema(
  {
   name : { type: String , minlength : [3,"Author must have 3 characters"] , required:[true,"Name is required"]},
   
  },

  { timestamps: true }
  
);
module.exports = mongoose.model("Author", AuthorSchema);