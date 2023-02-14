import Post from "../Models/Post";

const typeDefs: any = [`
    type Post {
        _id: String,
        title: String,
    }

    type Query {
        hello: String,
        getPosts(limit: number, offset: number, filters?: String): [Post],
    }

    type Mutation {
        createPost(name: String) : Post
        updatePost(_id: String, name: String) : Post
        deletePost(_id): String
    }
`];

const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world!';
        },
        getPosts: async (limit: number, offset: number, filters?: string) => {
            const posts = await Post.getUsers(limit, offset, filters || '')
            return posts
        }
    },
    Mutation: {
        createPost: async (_: any, { name }: any) => {
            const posts = await Post.create(name)
            console.log('Created:', posts)
            return posts;
        },
        updatePost: async (_: any, { _id, name }: any) => {
            const posts = await Post.update(_id, name)
            console.log('Updated', posts)
            return posts;
        },
        deletePost: async (_: any, { _id }: any) => {
            await Post.delete(_id) ? "Deleted" : "Error"
        }
    }
}

export default { typeDefs, resolvers }
