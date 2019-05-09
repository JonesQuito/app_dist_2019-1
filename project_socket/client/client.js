const net = require('net')

var client = net.Socket()

client.connect(3000, 'localhost', function(){
    console.log('cliente conectado')
})