import { createServer } from 'http';
import getClientsByCity from './clients.js';


createServer ((req, res) => { 
    // retorna código 200 => requisição feita com sucesso
    //informa que o tipo de conteúdo é html e usa utf-8
    res.writeHead(200, {
        'Content-type' : 'text/html charset=utf-8',
        'Header-costumizado' : 'Leonardo'
    });
 
    const clientsCity = getClientsByCity()
    //const city = getClientsByCity()

    res.end(`<h1>Clientes de Porto Alegre</h1>${getClientsByCity}`);
    
}).listen(3030, () => {
    console.log('Running server!');
})