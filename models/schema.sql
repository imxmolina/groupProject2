DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE (
  id INT NOT NULL AUTO_INCREMENT,
  product VARCHAR(256) NOT NULL,
  product_type VARCHAR(256) NOT NULL,
  distributor VARCHAR(256) NOT NULL,
  case_quantity INT,
  bottle_quantity INT,
  bottle_size INT,
  full_stock INT,
  current_stock INT,
  PRIMARY KEY (id),
  FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE (
    id INT NOT NULL AUTO_INCREMENT,
    client_name VARCHAR(256) NOT NULL,
    pwd VARCHAR(256),
    login_email VARCHAR(256),
    PRIMARY KEY (id)
)