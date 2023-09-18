-- Write your schema here --
DROP DATABASE IF EXISTS snc_db;
CREATE DATABASE snc_db;

USE snc_db;

CREATE TABLE products (
  id INT NOT NULL, -- each col has a defined data type and a constraint.
  product_name VARCHAR(30) NOT NULL,
  product_category VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  in_stock BOOLEAN NOT NULL
);

CREATE TABLE categories (
  id INT NOT NULL,
  product_name VARCHAR(30) NOT NULL
);

