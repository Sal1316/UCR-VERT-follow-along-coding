DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

USE registrar_db;

CREATE TABLE instructors (
  id INT NOT NULL, -- you could also specify PRIMARY KEY after the NULL here.
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id) -- sets the primary key to the id.
);

CREATE TABLE courses (
  id INT,
  course_title VARCHAR(30) NOT NULL,
  instructor_id INT,
  order_details TEXT,
  FOREIGN KEY (instructor_id) -- sets the foreign key to the istructor_id bc it relates to instuctors id in instructors table. 
  REFERENCES instructors(id) -- 
  ON DELETE SET NULL -- on the couses, if you delete an instructor, it would automatically clear out the couses id field.
);
