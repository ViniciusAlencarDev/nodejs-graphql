import mongoose from 'mongoose';

const UseScheme = new mongoose.Schema({
    name: String
})

const User: any = mongoose.model('User', UseScheme)

export default User
