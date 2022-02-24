const users = require('express').Router();
const { createUser, fetchAllUsers } = require("../db/queries/users");

users.get('/', fetchAllUsers);
users.post('/', createUser);

module.exports = users;