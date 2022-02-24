const db = require('../index');

const createUser = async (req, res, next) => {
    try {
        console.log(req.body)
        await db.none(
            "INSERT INTO users (username, email, password) VALUES(${ username }, ${ email }, ${ password })",
            req.body
        );
        res.json({
            message: 'new user made...'
        })
    } catch (err) {
        next(err);
    }
}

const fetchAllUsers = async (req, res, next) => {
    try {
        const users = await db.any(
            "SELECT * FROM users"
        );
        res.json({
            users,
            mesasge: 'users retrived...'
        })
    } catch (err) {
        next(err);
    }
}

module.exports = { createUser, fetchAllUsers }