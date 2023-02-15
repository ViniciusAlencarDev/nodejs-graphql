import mongoose from 'mongoose';

class Post {

    private post;

    constructor() {
        const UseScheme = new mongoose.Schema({
            title: String
        })

        this.post = mongoose.model('Post', UseScheme)
    }

    async getUsers(limit: number, offset: number, filters?: string) {
        const users = await (await this.post.find().where(JSON.parse(filters || '')).skip(offset).limit(limit)).reverse();
        return users
    }

    async create(title: String) {
        return this.post.create({ title })
    }

    async update(_id: String, title: String) {
        return this.post.updateOne(_id, title)
    }

    async delete(_id: String) {
        return this.post.deleteOne({ _id })
    }

}

export default new Post()
