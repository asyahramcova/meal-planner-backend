const express = require ('express');
const app = express() ;
const mongoose = require('mongoose');
const routes =require('./MealRoutes');
const cors = require ('cors');

require('dotenv').config();
mongoose.set("strictQuery", false);

const PORT = 7000 || process.env.port;
app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('connecting to MONGO'))
.catch((err) => console.log(err))

app.use(routes);

app.listen( PORT, () =>{
  console.log(`Im listerning on PORT ${PORT}`)
})


///asyahramcova   3KFAhcyyzJR39w6y

///mongodb+srv://asyahramcova:<password>@cluster0.a1qkjzd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0