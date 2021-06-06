const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/User");
const posRoute = require("./routes/Post");

dotenv.config();
// to send any json object
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", posRoute);

app.listen("5000", () => {
  console.log("Backend is running ");
});
