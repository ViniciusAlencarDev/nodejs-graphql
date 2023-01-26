// console.log('Init');

export function getLengthMessage(msg: string): number {
    return msg.length;
}

import express from 'express';
// import { buildSchema } from 'graphql';
// import mongoose, { mongo } from 'mongoose';
import './database/connection';
import routes from './routes';

// const msgs: Array<String> = [];

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

const app = express();
const port = 3000;

app.use(routes)

app.listen(port);
console.log(`Started a GraphQL API server at http://localhost:${port}/graphql`);
