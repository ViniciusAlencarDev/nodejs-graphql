const msgs: Array<String> = [];

const typeDefs: any = [`
    type Query {
        hello: String,
        getMessages: [String],
    }
    type Mutation {
        sendMessage(message: String) : [String]
    }
`];

const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world!';
        },
        getMessages: () => {
            return msgs;
        }
    },
    Mutation: {
        sendMessage: (_: any, helloData: any) => {
            msgs.push(Math.floor(Math.random() * 10).toString())
            
            return msgs;
        },
    }
}

export default { typeDefs, resolvers }
