const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyparser = require('body-parser');
const route = require('./routes/route');

app.use(bodyparser.json());


mongoose.connect("mongodb+srv://Dipen1234:jVP8pyAv3s3NzEM3@cluster0.dkmbl.mongodb.net/group14Database", {useNewUrlParser: true})
.then(() => console.log("mongoDB is connected"))
.catch(err => console.log(err))

app.use('/', route)

app.use((req,res,next)=>{
    res.status(404).send({status:false, msg:`Not found ${req.url}`})
    next()
})


app.listen(process.env.PORT || 3000, function () {
    console.log('Express is running on port ' + (process.env.PORT || 3000))
});