import User from "../Models/User";

const typeDefs: any = [`
    type User {
        _id: String,
        name: String,
    }

    type Query {
        hello: String,
        getUsers(filters?: String): [User],
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
        getUsers: async (filters?: String) => {
            const users = await User.getUsers(filters)
            console.log(users)
            return users
        }
    },
    Mutation: {
        createUser: async (_: any, { name }: any) => {
            const user = await User.create(name)
            console.log(user)
            return user;
        },
        updateUsers: async (_: any, { _id, name }: any) => {
            const user = await User.update(_id, name)
            console.log(user)
            return user;
        },
        deleteUser: async (_: any, { _id }: any) => {
            await User.delete(_id) ? "Deleted" : "Error"
        }
    }
}

export default { typeDefs, resolvers }
