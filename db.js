const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB connected Successfully");
  }).catch((e) => {
    console.log(e);
});