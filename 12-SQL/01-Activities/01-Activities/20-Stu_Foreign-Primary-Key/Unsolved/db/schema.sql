-- Write your Schema Here -- 
DROP DATABASE IF EXISTS snc_db;
CREATE DATABASE snc_db;

USE snc_db;

CREATE TABLE customers (
  id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id) -- 
);

CREATE TABLE customer_order (
  id INT,
  customer_id INT,
  order_details TEXT,
  FOREIGN KEY (customer_id) 
  REFERENCES customers(id) -- refrences the primary key in another table.
  ON DELETE SET NULL -- if any of the customer were to be deleted, all the colomns with the foreign key would have the NULL values in that field.
);

-- NOTES: when using foreigh keys you have to keep in mind that NOT NULL will make your code error.