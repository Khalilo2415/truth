const mongoose =require("mongoose");
//Database connection
 mongoose
    .connect('mongodb+srv://'+ process.env.DB_USER_PASS +'@truth.qmjz5.mongodb.net/Truth')
    .then(() => console.log("Connected to mango"))
    .catch((err) => console.log(('failed to connection',err)));
  