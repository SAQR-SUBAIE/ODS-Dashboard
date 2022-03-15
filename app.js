const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');
// app.use(express.static("static"));

app.use(express.static(publicPath));

app.set('view engine', 'ejs');

app.get('/', (_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});

app.get('/saqr', (_,resp)=>{
    resp.sendFile(`${publicPath}/main.html`)
});

app.get('/dashboard', (_,resp)=>{
    resp.sendFile(`${publicPath}/dashboard.html`)
});

app.get('/guild/716783245387235410', (_,resp)=>{
    resp.sendFile(`${publicPath}/guild.html`)
});

app.get('/guild', (_,resp)=>{
    resp.sendFile(`${publicPath}/guild.html`)
});

app.get('/admin', (_,resp)=>{
    resp.sendFile(`${publicPath}/admin.html`)
});

app.get('/logs', (_,resp)=>{
    resp.sendFile(`${publicPath}/logs.html`)
});

app.get('/youtube', (_,resp)=>{
    resp.sendFile(`${publicPath}/youtube.html`)
});

app.get('/color', (_,resp)=>{
    resp.sendFile(`${publicPath}/color.html`)
});













app.get('/reviews', (_,resp)=>{
    resp.sendFile(`${publicPath}/reviews.html`)
});

app.get('*', (_,resp)=>{
    resp.sendFile(`${publicPath}/404.html`)
});




app.listen(3300, ()=>{
    console.log('Server is up and running on port : http://localhost:3300/');
});