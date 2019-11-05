const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "static")));

app.use("/getSong", (req, res)=>{
    res.send("YMCA");
    console.log("Got a song.")
})

app.listen(7000, function(err){
    if(err)
        return console.log("Err " + err);
    console.log("Your server started on port 7000");
})