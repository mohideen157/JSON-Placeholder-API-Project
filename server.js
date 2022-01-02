express=require('express');
cors=require('cors');
rp = require('request-promise');

//var express = require("express");

const app = express();

app.use(cors());
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname);

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/index", (req, res) => {
  
let responseData={};
  rp({
    method: 'GET',
      uri: 'https://jsonplaceholder.typicode.com/users',
      headers: {
        'Content-Type': 'application/json',
      },
      json: true
    }).then(function(userresponse){
      responseData=userresponse;
    }).catch(function(err){
      console.log(err);
    }).done(()=>{
      res.render("index",{userData:responseData});
    });
});