import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
const cors = require('cors');

const app = express();

/*app.get('/', (req, res) => {
  res.json({
    errors:[{"message":"Must provide query string."}]
  })
});*/

const getErrorCode = require('./utils/errors')

app.use(cors());
app.use('/', graphqlHTTP({
  graphiql: true,
  schema: schema,
  formatError: (err) => {
    const error = getErrorCode(err.message)
    return ({ message: error.message, statusCode: error.statusCode })
  }
}));

app.listen(4000, () => console.log('Server on port 4000'));
