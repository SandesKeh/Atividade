import express from 'express'
const servidor= express ()

servidor.use(express.json())

servidor.get ('/calcular/somatoria', (req,resp) => {

let soma = Number (req.query.soma)
let soma1 = Number (req.query.soma1)

let somar = soma + soma1

resp.send ({
    somar : somar 
})
} )

servidor.get('/calculadora/sub', (req, resp) => {
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)

    let diminuir = n1 - n2

    resp.send({
        entrada:{
            números: n1,
            numeros: n2
        },
        diminuir: diminuir
    })
})

servidor.post('/calculadora', (req, resp) => {
    let n1 = req.body.numero1
    let n2 = req.body.numero2

    let soma = n1 + n2

    resp.send({
        entrada:{
            números: n1,
            numeros: n2
        },
        soma: soma
    })
})


servidor.listen (3001, ()=> console.log("A API subiu na porta 3001!") )