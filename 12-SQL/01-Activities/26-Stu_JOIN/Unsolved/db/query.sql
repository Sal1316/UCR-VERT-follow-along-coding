-- Add your code below and execute file in MySQL Shell --
-- INNER JOIN -- 

-- SELECT book_name.id AS bookID, favorite_books.name as bookName, favorite_books.in_stock as inStock, book_price.price as price, 
-- FROM favorite_books
-- JOIN book_prices ON favorite_books.book_prices = book_prices.price; -- ex, join on primary key = foriegn key. they need to have a match on the other table to return something.


SELECT favorite_books.book_name, book_prices.price
FROM favorite_books

JOIN book_prices ON favorite_books.book_prices = book_prices.id;  -- match up foriegn key and primary key.