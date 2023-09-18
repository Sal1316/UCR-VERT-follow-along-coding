DROP DATABASE IF EXISTS course_db;
CREATE DATABASE course_db;

USE course_db;

CREATE TABLE courses (
  id INT NOT NULL, 
  course_title VARCHAR(30) NOT NULL,
  course_description TEXT NOT NULL,
  active BOOLEAN NOT NULL,
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

/* NOTES:
- Data types:
  - INT
  - VARCHAR() - string with some limit enforced
  - NOT NULL - cannot have empty values
  - TEXT - string that has indeterminant lenght. sentances/paragraphs. no limit 
  - BOOLEAN - zero or one.
  - DATETIME DEFAULT -  add the current time in which it was crated.

*/