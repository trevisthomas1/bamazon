DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Call of Duty: WWII (PS4)", "Video Games", 40.94, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Grand Theft Auto 5 (PS4)", "Video Games", 30.44, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Last of Us Remastered (PS4)", "Video Games", 27.40, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("FIFA 18 (PS4)", "Video Games", 38.99, 28);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Codenames", "Toys & Games", 16.59, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Catan", "Toys & Games", 43.99, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pandemic", "Toys & Games", 35.99, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Saving Private Ryan (4K)", "Movies & TV", 23.09, 34);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mad Max: Fury Road (4K)", "Movies & TV", 24.49, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sicario (4K)", "Movies & TV", 28.99, 1);

SELECT * FROM products;
