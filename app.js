const express = require('express')
const dotenv = require('dotenv');
const app = express()
const path = require('path')
dotenv.config();


const PORT = process.env.PORT || 5000;
const CLIENT_ID = process.env.CLIENT_ID;
const SUPPORT_ID = process.env.SUPPORT_ID;

// views engine setup
app.set('view engine','ejs')
app.set('views', path.join(__dirname, '/views'));

// Serve static files from /public
let publicPath = path.join(__dirname, '/public')
app.use(express.static(publicPath));

// Routes



app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/saqr', function(req, res) {
    res.render('main');
});

app.get('/dashboard', function(req, res) {
    res.render('dashboard');
});

app.get('/guild/716783245387235410', function(req, res) {
    res.render('guild');
})

app.get('/guild', function(req, res) {
    res.render('guild');
})

app.get('/admin', function(req, res) {
    res.render('admin');
})


app.get('/logs', function(req, res) {
    res.render('logs');
})

app.get('/youtube', function(req, res) {
    res.render('youtube');
})

app.get('/color', function(req, res) {
    res.render('color');
})

app.get('/reviews', function(req, res) {
    res.render('reviews');
})

app.get('/coins', function(req, res) {
    res.render('coins');
})


app.get('/copyright', function(req, res) {
    res.render('copyright');
})

app.get('/verify', function(req, res) {
    res.render('verify');
})

app.get('/temp-room', function(req, res) {
    res.render('temp_room');
})

app.get('/tickets', function(req, res) {
    res.render('tickets');
})

app.get('/rating', function(req, res) {
    res.render('rating');
})

app.get('/organizing', function(req, res) {
    res.render('organizing');
})

app.get('/giveaways', function(req, res) {
    res.render('giveaways');
})

app.get('/submit', function(req, res) {
    res.render('submit');
})

// app.get('', function(req, res) {
//     res.render('');
// })




app.get('/invite', (req, res) => {
    res.redirect(`https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&scope=bot%20applications.commands&permissions=2151140424`);
});


app.get('/support', function(req, res) {
    res.redirect(`https://discord.gg/${SUPPORT_ID}`)
})


app.get('/:id', function(req, res) {
    console.log(req.params);
    const id = req.params.id;
    res.render('404', { mytitle: "O.D.S - 404", id: `${id}`, bottom: "fixed-bottom", ar_en: 'ar', rtl_ltr: 'rtl' });
});





app.listen(PORT, function() {
    console.log(`Example app listening on http://localhost:${PORT}/ !`)
});