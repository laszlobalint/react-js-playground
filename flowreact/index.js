const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/*', function (req, res, next) {
  res.render('index', {layout: false});
});

app.listen(8080);
