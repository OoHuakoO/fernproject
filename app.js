const   express = require("express"),
        bodyParser = require("body-parser"),
        indexRoutes = require('./routes/index'),
        port = process.env.PORT || 3000

const  app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use('/',indexRoutes);

app.listen(port,function(req,res){
    console.log('Server has started');
});