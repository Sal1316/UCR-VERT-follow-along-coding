UPDATE fiction
SET name = "boby"
-- I had a simicolor ad the end of 'boby' that was giving me an error. --
-- if you dont add the WHERE clause, all the names are changes in the table --
WHERE id = 2;
