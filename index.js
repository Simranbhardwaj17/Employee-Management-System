const express = require("express");
require("dotenv").config();
require("./db");
const port = process.env.PORT;

const app = express();

// app.get("/hello", (req, res) => {
//   res.send("welcome");
// })

const employeeRouter = require("./routers/employeeRouter");
app.use("/employee", employeeRouter);

app.listen(port, () => {
  console.log(`Your app is running at port ${port}`);
});