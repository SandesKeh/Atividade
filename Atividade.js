import express from 'express'


const servidor= express ()

servidor.get ('/calcular/somatoria', (req,resp) => {

let soma = Number (req.query.soma)
let soma1 = Number (req.query.soma1)

let somar = soma + soma1

resp.send ({
    somar : somar 



})


} )




servidor.listen (3001, ()=> console.log("API subiu ") )