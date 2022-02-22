DROP DATABASE IF EXISTS runback_db;
CREATE DATABASE runback_db;

\c runback_db

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR,
    email VARCHAR,
    password VARCHAR
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    creator_id INT REFERENCES users (id)
    body VARCHAR,
    hidden BOOLEAN
)