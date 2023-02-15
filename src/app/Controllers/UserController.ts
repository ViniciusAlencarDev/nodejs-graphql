import User from "../Models/User";

const typeDefs: any = [`
    type User {
        _id: String,
        name: String,
    }

    type Query {
        hello: String,
        getUsers(limit: number, offset: number, filters?: String): [User],
    }

    type Mutation {
        createUser(name: String) : User
        updateUsers(_id: String, name: String) : User
        deleteUser(_id): String
    }
`];

const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world!';
        },
        getUsers: async (limit: number, offset: number, filters?: string) => {
            const users = await User.getUsers(limit, offset, filters || '')
            return users
        }
    },
    Mutation: {
        createUser: async (_: any, { name }: any) => {
            const user = await User.create(name)
            console.log('Created:', user)
            return user;
        },
        updateUsers: async (_: any, { _id, name }: any) => {
            const user = await User.update(_id, name)
            console.log('Updated:', user)
            return user;
        },
        deleteUser: async (_: any, { _id }: any) => {
            await User.delete(_id) ? "Deleted" : "Error"
        }
    }
}

export default { typeDefs, resolvers }
