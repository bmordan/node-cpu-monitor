var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var expressLayouts = require('express-ejs-layouts');
var monitor = require('os-monitor')
var stream = monitor.start({ delay: 60, stream: true });

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(expressLayouts)
app.use(require('express').static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index', { layout: 'layout'})
})

http.listen(2000, function(){
  console.log("CPU METER server running on :2000")
})

io.on('connection', function(socket) {
  stream.on('monitor', function(event) {
    var loadavg = Math.floor(event.loadavg[0]*100);
    socket.emit('useage', { useage: loadavg } );
  })
})


