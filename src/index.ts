// console.log('Init');

export function getLengthMessage(msg: string): number {
    return msg.length;
}

import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { graphql, buildSchema } from 'graphql';

const schema  = buildSchema(`
    type Query {
        hello: String
    }
`)

const rootValue = {
    hello: () => {
        return 'Hello world!';
    }
}

// graphql({
//     schema,
//     source: '{ hello }',
//     rootValue
//   }).then((response) => {
//     console.log(response);
//   });

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: rootValue,
  graphiql: true,
}));
app.listen(3000);
console.log('Started a GraphQL API server at http://localhost:3000/graphql');
