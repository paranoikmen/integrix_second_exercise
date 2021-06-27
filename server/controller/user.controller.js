const db = require("../db")
class UserController {
    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM person')
        res.send(users.rows)
    }

    async getOneUser(req, res) {
        const {login, password} = req.body

        const user = await db.query('SELECT * FROM person where login = $1 AND password = $2', [login, password])
        console.log(user)
        res.send(user.rows.length !== 0 ? user.rows[0] : {error: "user isn't found"})
    }

    async updateUser(req, res) {
        const {login, vote} = req.body

        const user = await db.query('UPDATE person set vote = $1 where login = $2 RETURNING *', [vote, login])
        res.send(user.rows[0])
    }
}

module.exports = new UserController()