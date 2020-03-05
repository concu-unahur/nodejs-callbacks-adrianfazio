function miMap(arrayViejo, porDos) {
    var nuevoArray = [];
    porDos(nuevoArray)
    return nuevoArray;
  }
  

  

function porDos(nro) {
    return nro*2
}

// Probando miMap
arrayViejo = [1,2,3,4,5]
var arrayNuevo = miMap(...)
console.log(arrayNuevo) // arrayNuevo = [2,4,6,8,10] 
console.log(arrayViejo*2)