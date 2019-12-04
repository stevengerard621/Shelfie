CREATE TABLE products (
product_id serial primary key,
product_name VARCHAR(60) NOT NULL,
price NUMERIC NOT NULL,
image_url VARCHAR(500)
);

INSERT INTO products (
product_name,
price,
image_url
) VALUES (
'PikaBrew',
100,
'http://www.washingtonbeerblog.com/wp-content/uploads/2019/03/pokemon-beer.jpg'
)

INSERT INTO products (
product_name,
price,
image_url
) VALUES (
'Pika',
50,
'https://s3.amazonaws.com/bloc-global-assets/almanac-assets/bootcamps/logos/000/002/656/original/DevMountain.jpg?1467187319'
)