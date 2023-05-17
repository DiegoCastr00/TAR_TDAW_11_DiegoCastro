const http = require('http');

const servidor = http.createServer((req,resp) => {
    resp.end('hola Mundo')
});

servidor.listen(3000,()=>{
    console.log('El servidor esta escuchando')
})