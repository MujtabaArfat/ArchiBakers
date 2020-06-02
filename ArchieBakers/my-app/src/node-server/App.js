const express = require("express");
const port = process.env.PORT||8000;
const userRouter = require('./routes/login');
const signUpRouter = require('./routes/SignUp');

require('./DB/mongoose');
const app = express();
const cors = require('cors');
app.use(express.json())

app.use(cors());
app.use(userRouter);
app.use(signUpRouter);



app.listen(port,(err,res)=>{
    console.log("Listening at port "+port)
})