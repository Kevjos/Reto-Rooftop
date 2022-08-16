const cifrado = require('./significadoClaves.json')
const urlEncriptada = require("./posiciones.json");

let numeros = []
let urlArr = {}

const obtenerLetraCorrespondiente = () => {
    for (let i in cifrado) {
      for (let j in urlEncriptada) {
        if (cifrado.hasOwnProperty(i) && urlEncriptada.hasOwnProperty(j) && cifrado[i] == j) {
          numeros.push(urlEncriptada[j]);
          urlArr[i] = urlEncriptada[j];
        }
      }
    }
    return urlArr;
}

const encontrarNumeroMayor = () => {
    obtenerLetraCorrespondiente()
    let numerosArr = []
    numeros.forEach(i => {        
        numerosArr.push(Math.max(...i));
    })
    return Math.max(...numerosArr)
}

function obtenerUrlString(){

    let url = "";
    let urlFinal = Array(encontrarNumeroMayor() + 1);
    for (let b = 0; b < urlFinal.length; b++) {
        for (let c in urlArr) {
          for (let d = 0; d < urlArr[c].length; d++) {
              if (b == urlArr[c][d]) {
              urlFinal[b] = c;
              }
          }
        }
    }

    url = urlFinal.join("")
    console.log(url);

    return url
}

obtenerUrlString()

module.exports = {
  obtenerUrlString,
  encontrarNumeroMayor,
  obtenerLetraCorrespondiente,
};