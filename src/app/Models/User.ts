import mongoose from 'mongoose';

class User {

    private user;

    constructor() {
        const UseScheme = new mongoose.Schema({
            name: String
        })
        
        this.user = mongoose.model('User', UseScheme)
    }

    async getUsers(filters?: string) {
        return this.user.find({}).where(JSON.parse(filters || ''));
    }

    async create(name: String) {
        return this.user.create({ name })
    }

    async update(_id: String, name: String) {
        return this.user.updateOne(_id, name)
    }

    async delete(_id: String) {
        return this.user.deleteOne({ _id })
    }

}

export default new User()
