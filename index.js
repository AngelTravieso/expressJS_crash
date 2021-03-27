const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
// const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayour: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Homepage Route
app.get('/', (req, res) => res.render('index', { title: 'Member App', members }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Serve started on port ${PORT}`));

// Init Middleware
// app.use(logger);

// app.get('/', (req,res) => {
// 	res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
