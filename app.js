const express = require('express');
const mongoose = require('mongoose');

const app = express();


//Middlewares

app.use('/',(req,res,next) => {
    res.send("This is our starting app")
})

mongoose.connect(
    "mongodb+srv://admin:TKgaGpoQacWrkWhy@cluster0.kms04hf.mongodb.net/?retryWrites=true&w=majority "
    )
    .then(() => console.log("Connected To Database"))
        .then(() => {
            app.listen(3003)
        })
        .catch((err) => console.log(err));




//working on db rn
