DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE auctions(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  par VARCHAR(45) NOT NULL,
  current_inventory INT default 0,
  PRIMARY KEY (id)
);
