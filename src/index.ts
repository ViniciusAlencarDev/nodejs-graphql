// console.log('Init');

export function getLengthMessage(msg: string): number {
    return msg.length;
}

import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose, { mongo } from 'mongoose';

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017/testando');
const User: any = mongoose.model('User', new mongoose.Schema({
    name: String
}))

const msgs: Array<String> = [];

// const schema  = buildSchema(`
//     type Query {
//         hello: String,
//         getMessages: [String],
//     }
//     type Mutation {
//         sendMessage(message: String) : [String]
//     }
// `)

// const rootValue = {
//     hello: () => {
//         return 'Hello world!';
//     },
//     sendMessage: (_: any, helloData: any) => {
//         msgs.push(Math.floor(Math.random() * 10).toString())
//         return msgs;
//     },
//     getMessages: () => {
//         return msgs;
//     }
// }

// graphql({
//     schema,
//     source: '{ hello }',
//     rootValue
//   }).then((response) => {
//     console.log(response);
//   });


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

const app = express();
const port = 3000;
app.use('/graphql', graphqlHTTP({
    // schema: schema,
    // rootValue: rootValue,
    schema: makeExecutableSchema({typeDefs, resolvers}),
    graphiql: true,
}));
app.listen(port);
console.log(`Started a GraphQL API server at http://localhost:${port}/graphql`);
