var config = require('./config');
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: config.pass,
    database: "bamazon"
});

connection.connect(function (error) {
    if (error) throw error;
    console.log("connected as id " + connection.threadId);
});


connection.query("SELECT * FROM products", function (error, response) {
    if (error) throw error;

    for (var i = 0; i < response.length; i++) {
        console.log("----------");
        console.log("ID: " + response[i].id);
        console.log("Product: " + response[i].product_name);
        console.log("Department: " + response[i].department_name);
        console.log("Price: " + response[i].price);
        console.log("Quantity: " + response[i].stock_quantity);
        console.log("----------");
    }

});