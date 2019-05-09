const net = require('net')

var clientes = []

const PORT = 3000

var server = net.createServer((socket)=>{
    socket.name = socket.remoteAddress + ' - ' + socket.remotePort

    clientes.push(socket)

    socket.write("Bem vindo " + socket.name + '\n')
    //broadcast(socket.name + ' entrou no chat')

    server.on('data', function(data){
        console.log(data)
    })

}).listen(PORT, ()=>{
    console.log('Servidor rodando em localhost:' + PORT)
});


//module.exports = server