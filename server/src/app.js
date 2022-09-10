const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schemas');

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    }),
  );
   
  app.listen(port, () => {
    console.log('Space Launch GraphQL Server listening on port ' + port);
  });