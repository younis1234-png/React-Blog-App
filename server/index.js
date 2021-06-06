const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/User");

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

app.listen("5000", () => {
  console.log("Backend is running ");
});

// lxIsKXLr2WS0ps2u
// mongodb+srv://blog:lxIsKXLr2WS0ps2u@cluster0.izv3g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
