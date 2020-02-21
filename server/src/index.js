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

app.use(cors());
app.use('/', graphqlHTTP({
  graphiql: true,
  schema: schema
}));

app.listen(4000, () => console.log('Server on port 4000'));
