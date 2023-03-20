const db = require('../db')

class UserController {

    async createUser(req, res){

        const {email, licSchet, password, residents} = req.body
        const is_super = false
        if (password.length < 8) {
            res.json('Пароль должен содержать от 8 знаков!')
        } else {
            const newPerson = await db.query(`INSERT INTO person (licSchet, email, password, residents, is_super) values ($1, $2, $3, $4, $5) RETURNING *`,
            [licSchet, email, password, residents, is_super])
            res.json(newPerson)
            console.log(`User has been created: email - ${email}, licSchet - ${licSchet}, password - ${password}, is_superuser - ${is_super}`)
        }
    }
    async getUsers(req, res){
        const Persons = await db.query(`SELECT * FROM person`)
        res.json(Persons.rows)
    }
    async getOneUser(req, res){

    }
    async updateUser(req, res){

    }
    async deleteUser(req, res){

    }

}
module.exports = new UserController()