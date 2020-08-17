const express = require('express');
var app = new express();
const fs = require('fs');
const port = 8080

app.set('view engine','ejs');


app.get('/',(req,res)=>{
    
    var details= fs.readFileSync(__dirname+'/data.json');
    details = JSON.parse(details);

    res.render('index',{
        title:"Hi "+details.name+", Your data from API is ",
        data: JSON.stringify(details)
    });
    console.log(details.toString());

})

app.listen(port,()=>{
    console.log("app listening on %s",port);
});
