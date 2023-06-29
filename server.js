var exp = require('express')
var app = exp()
var bp = require('body-parser')
app.use(bp.urlencoded({ extended: true }))
app.use(exp.static('public'))

app.get('/getform', function (req, res) {
    res.sendFile(__dirname + "/public/LoginForm.html")
})
app.post('/getDataTable', function (req, res) {
    var a = req.body.name;
    var b = req.body.bdate;
    var c = req.body.email;
    var d = req.body.qua;
    str = "";
    str += "<table border=1>"
    str += "<tr>"
    str += "<td>"
    str += "Name"
    str += "</td>"
    str += "<td>"
    str += a
    str += "</td>"
    str += "</tr>"

    str += "<tr>"
    str += "<td>"
    str += "BirthDate"
    str += "</td>"
    str += "<td>"
    str += b
    str += "</td>"
    str += "</tr>"

    str += "<tr>"
    str += "<td>"
    str += "EmailID"
    str += "</td>"
    str += "<td>"
    str += c
    str += "</td>"
    str += "</tr>"

    str += "<tr>"
    str += "<td>"
    str += "Qualification"
    str += "</td>"
    str += "<td>"
    str += d
    str += "</td>"
    str += "</tr>"
    str += "</table>"
    res.send(str)

})

app.listen(9000, function () {
    console.log("server started :9000")
})