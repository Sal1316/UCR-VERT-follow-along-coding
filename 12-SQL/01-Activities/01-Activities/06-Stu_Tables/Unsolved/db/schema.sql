DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;

-- select db for use --
USE books_db;

-- Add biography table --
CREATE TABLE biographies (
      id INT NOT NULL, 
      name VARCHAR(100) NOT NULL
      -- I belive that the table is not getting created bc, I have NOT NULL in both id and name. Not sure, why if they are being used in the activity 05. --
      --   ans: I had a comma (,) at the end of name row.--
);