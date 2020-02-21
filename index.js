'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require('path');
var cors = require('cors');

var app = (0, _express2.default)();

// Serve the static files from the React app
console.log(__dirname);
app.use(_express2.default.static(path.join(__dirname, 'build')));

/*app.get('/', (req, res) => {
  res.json({
    errors:[{"message":"Must provide query string."}]
  })
});*/

// Handles any requests that don't match the ones above

var getErrorCode = require('./utils/errors');

app.use(cors());

app.use('/graphiql', (0, _expressGraphql2.default)({
  graphiql: true,
  schema: _schema2.default,
  formatError: function formatError(err) {
    var error = getErrorCode(err.message);
    return { message: error.message, statusCode: error.statusCode };
  }
}));

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(4000, function () {
  return console.log('Server on port 4000');
});
//# sourceMappingURL=index.js.map