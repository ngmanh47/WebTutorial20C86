const express = require('express');
const exphbs = require('express-handlebars');
const hbs_sections = require('express-handlebars-sections');

require('express-async-errors');

const app = express();

const hbs = exphbs.create({
    extname: 'hbs',
    defaultLayout: 'layout_fe',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',

    helpers: {
        section: hbs_sections(),
    }
});

app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');

require('./middlewares/locals.mdw')(app);
require('./middlewares/routes.mdw')(app);

// Set public static folder
app.use(express.static(__dirname + '/public'));

// Set server port & start server
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log(`Server is running at http://localhost:${app.get('port')}`);
});