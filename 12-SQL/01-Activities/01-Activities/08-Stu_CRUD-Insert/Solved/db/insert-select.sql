-- Insert multiple biographies --
INSERT INTO biographies (id, name) -- inserting 2 rows, id and name. --
VALUES
    ( 001, "Diary of Anne Frank"),
    ( 002, "Frida: A Biography of Frida Kahlo"),
    ( 003, "Long Walk to Freedom");

SELECT * FROM biographies; -- returns all the values from the biographies.
