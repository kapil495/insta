var mysql = require("mysql")
var con = mysql.createConnection({
    host:"sql5.freesqldatabase.com",
    password:"HvpDxMYsiA",
    user:"sql5668231",
    database:"sql5668231",
    port:3306,
}
)

module.exports = con;
