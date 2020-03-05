function cambia(x, unaFuncion) {
    z = x + 1
    y = unaFuncion(z)
    return y
}


function porDiez(x) {
    y = x*10
    return y
}


function porCinco(x) {
    y = x*5
    return y
}


valor = 2 //no se puede modificar


// que el valor de res1 sea 15
var res1 = cambia(valor, porCinco)
console.log(res1)


// que el valor de res2 sea 30
var res2 = cambia(valor, porDiez)
console.log(res2)


var res3 = cambia(cambia(valor, porCinco), porDiez)
// ¿Cuánto vale res3 acá? No vale hacer console.log ni nada por el estilo.
// vale 160 porque a 15 (que le da el cambia(valor, porCinco)) 
// le suma 1 y despues multiplica por 10
