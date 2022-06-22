// TEMPLATE DE SERVIDOR
import { readFile } from 'fs'
import { createServer } from 'http'

// req: request (requisição)
// res: response (resposta)
createServer((req, res) => {
    res.writeHead(200, {'Content-type' : 'text/html; charset=utf-8'})

    readFile('home.html', 'utf-8', (err, data) => {
        console.log('Lendo o arquivo!')
        res.write(data)
        res.end()
    })

}).listen(3030, () => {
    console.log('Running Server!')
})