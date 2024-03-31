const express = require("express");
const app = express();
const mongoose = require("mongoose");
const scheduledb = require("./scheduleDetails");
const cors = require('cors');

mongooseURL = "mongodb://127.0.0.1:27017/planner"
app.use(express.json());


const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST'], // Allow only GET and POST requests
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow only specific headers
  };

app.use(cors(corsOptions));

mongoose
    .connect(mongooseURL)
    .then(() => {
        console.log("DB Connected successfully");
    }).catch((e) => {
        console.log(e)
    });

const schedule = mongoose.model("schedule");

app.post("/add", async(req, res) => {
    const {email, name, date, time, repeat} = req.body;
    console.log(email);

    try{
        await schedule.create({
            email: email,
            name: name,
            date: date,
            time: time,
            repeat: repeat,
        });

    res.send({status:"ok", data:"Schedule created"});
    } catch(error) {
        console.log(error);
    }
})

app.post("/getSchedule", async(req, res) => {
    const {email, date} = req.body;

    try{
        const data = await schedule.find({email: email, date: date});
        console.log(data);
        res.send({status:"ok", data: data});
    } catch(error) {
        console.log(error);
    }
})

app.listen(3000, () => {
    console.log("Server listening in port 3000");
})