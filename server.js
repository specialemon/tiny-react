const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


mongoose.connect("mongodb://specialemon:199199@cluster0-shard-00-00-qskyf.mongodb.net:27017,cluster0-shard-00-01-qskyf.mongodb.net:27017,cluster0-shard-00-02-qskyf.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true", { useNewUrlParser: true}).then(function(){
  console.log("connected to db");
});

require('./routes/apiRoutes')(app);

if (process.env.NODE_ENV === "production") {
  app.get("*", function (req,res){
      res.sendFile(__dirname + "/client/build/index.html")
  })
}


app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});


// "mongodb://specialemon:199199@cluster0-shard-00-00-qskyf.mongodb.net:27017,cluster0-shard-00-01-qskyf.mongodb.net:27017,cluster0-shard-00-02-qskyf.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"