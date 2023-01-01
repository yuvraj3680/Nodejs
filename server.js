const express=require('express');
const app=express();
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(req,resp){

resp.sendFile(__dirname+'/index.html');

});

app.listen(4000,function(){

    console.log("server running on 4000");
});
