import mongoose from 'mongoose';

class User {

    private user;

    constructor() {
        const UseScheme = new mongoose.Schema({
            name: String
        })
        
        this.user = mongoose.model('User', UseScheme)
    }

    async getUsers() {
        return this.user.find({});
    }

    async create(name: String) {
        return this.user.create({ name })
    }

}

export default new User()
