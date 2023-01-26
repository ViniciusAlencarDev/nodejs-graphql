import { Router } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';

// import controller
import UserController from '../app/Controllers/UserController';

const router = Router()

router.use('/graphql', graphqlHTTP({
    // schema: schema,
    // rootValue: rootValue,
    schema: makeExecutableSchema(UserController),
    graphiql: true,
}));

export default router
