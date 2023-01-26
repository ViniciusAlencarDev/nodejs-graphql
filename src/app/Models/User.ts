import mongoose from 'mongoose';

class User {

    private user;

    constructor() {
        const UseScheme = new mongoose.Schema({
            name: String
        })
        
        this.user = mongoose.model('User', UseScheme)
    }

    getUser() {
        return this.user
    }

}

export default new User().getUser()
