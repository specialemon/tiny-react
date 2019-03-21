const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/kudoTest", { useNewUrlParser: true, useMongoClient: true }).then(function () {
    console.log("connected to db");
});

const User = require('../models/User');
const Kudo = require('../models/Kudo');

User.deleteMany();
Kudo.deleteMany();

User.create([{
    Name: "Leon"
},
{
    Name: "Claire"
},
{
    Name: "Ada"
},
{
    Name: "Wesker"
}
]).then(Users => {
    console.log(`${Users.length} users created`);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    mongoose.connection.close();
});


