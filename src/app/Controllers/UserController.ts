import User from "../Models/User";

const typeDefs: any = [`
    type User {
        _id: String,
        name: String,
    }

    type Query {
        hello: String,
        getUsers: [User],
    }

    type Mutation {
        createUser(name: String) : User
    }
`];
 
const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world!';
        },
        getUsers: async () => {
            const users = await User.getUsers()
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
    }
}

export default { typeDefs, resolvers }
