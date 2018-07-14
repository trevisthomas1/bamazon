var config = require("./config");
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: config.pass,
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

function purchase() {

    showProducts();

    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "Please enter the id of the product that you would like to purchase.",
            filter: Number
        },
        {
            type: "input",
            name: "quantity",
            message: "Please enter the amount you would like to purchase?",
            filter: Number
        }
    ]).then(function (input) {

        var item = input.id;
        var quantity = input.quantity;

        var queryStr = "SELECT * FROM products WHERE ?";

        connection.query(queryStr, { id: item }, function (err, res) {
            if (err) throw err;

            if (res.length === 0) {
                console.log("Invalid item ID, please enter a different item ID.");
                purchase();

            } else {
                var productData = res[0];

                if (quantity <= productData.stock_quantity) {

                    var updateQueryStr = "UPDATE products SET stock_quantity = " + (productData.stock_quantity - quantity) + " WHERE id = " + item;

                    connection.query(updateQueryStr, function (err, data) {
                        if (err) throw err;

                        console.log("Your oder has been placed. Your total is $" + productData.price * quantity);
                        console.log("Thank you for shopping with Bamazon.");
                        console.log("\n---------------------------------------------------------------------\n");

                        connection.end();
                    })
                } else {
                    console.log("Insufficient quantity to fulfill your order. Your order can not be placed.");
                    console.log("Please reconnect, modify your order and try again.");
                    console.log("\n---------------------------------------------------------------------\n");

                    connection.end();
                }
            }
        })
    })
};

function showProducts() {

    var productQueryStr = "SELECT * FROM products"

    connection.query(productQueryStr, function (err, res) {
        if (err) throw err;

        console.log("Current inventory:");

        for (var i = 0; i < res.length; i++) {
            console.log("----------");
            console.log("ID: " + res[i].id);
            console.log("Product: " + res[i].product_name);
            console.log("Department: " + res[i].department_name);
            console.log("Price: " + res[i].price);
            console.log("Quantity: " + res[i].stock_quantity);
            console.log("----------");
        }

    });

};

purchase();