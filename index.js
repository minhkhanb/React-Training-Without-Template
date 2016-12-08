var express = require('express');
var bodyParser = require('body-parser');                       //define bodyParser
var parser = bodyParser.urlencoded({extended: false});         //define bodyParser
var app = express();

// Client gui len dua vao public
app.use(express.static("public"));

//su dung ejs engine
app.set("view engine", "ejs");

//giao dien luu o views
app.set("views", "./views");
app.listen(3000);

var Arr = [
    "Android",
    "iOS",
    "PHP",
    "React"
];

// truy cap http:localhost:3000
app.get("/", function (req, res) {
   res.render("home");
});

app.post('/getNotes', function (req, res) {        //ai do post vao thi send Arr
   res.send(Arr);
});

app.post('/addData', parser, function (req, res) {            //require bodyParser
   var newNote = req.body.note;           //note: ten thuoc tinh gui len
   Arr.push(newNote);
   res.send(Arr);
});

app.post('/delete', parser, function (req, res) {
   var id = req.body.idDelete;
    Arr.splice(id, 1);          //Xoa phan tu co id nao, xoa may phan tu
    res.send(Arr);      //updat lai data sau khi xoa
});

app.post('/updateData', parser, function (req, res) {
    var id = req.body.idEdit;
    Arr[id] = req.body.content;
    res.send(Arr);      //updat lai data sau khi sua
});