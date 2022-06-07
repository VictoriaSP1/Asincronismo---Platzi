// importamos el modulo para hacer las peticiones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// direccion de la API
let api = 'https://rickandmortyapi.com/api/character/';

// funcion principal
function fetchData(url_api, callback){
  // instanciamos la conexion
  let xhttp = new XMLHttpRequest();
  // abrir una conexion con el metodo, la ruta y si es asincrono
  xhttp.open('GET', url_api, true);
  // validacion del llamado
  xhttp.onreadystatechange = (event) => {
    // el state 4 es el ultimo de la peticion
    if(xhttp.readyState === 4){
      // verificamos que el status este en 200, que dice que todo bien, no un 400 o 500
      if(xhttp.status === 200){
        // el primer valor es el err, y el siguiente el resultado
        // ejecutamos el callback con el resultado
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        // si no es 200
        let error = new Error('Error: ' + url_api);
        // matamos el proceso con un error
        return callback(error, null);
      }
    }
  }
  // por ultimo enviamos la peticion
  xhttp.send();
}
