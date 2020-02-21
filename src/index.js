import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
const path = require('path');
const cors = require('cors');

const app = express();

// Serve the static files from the React app
console.log(__dirname);
app.use(express.static(path.join(__dirname, 'build')));

/*app.get('/', (req, res) => {
  res.json({
    errors:[{"message":"Must provide query string."}]
  })
});*/

// Handles any requests that don't match the ones above

const getErrorCode = require('./utils/errors')

app.use(cors());

app.use('/graphiql', graphqlHTTP({
  graphiql: true,
  schema: schema,
  formatError: (err) => {
    const error = getErrorCode(err.message)
    return ({ message: error.message, statusCode: error.statusCode })
  }
}));

app.use(express.static('public'));

app.get('*', (req,res) =>{
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT || 4000)