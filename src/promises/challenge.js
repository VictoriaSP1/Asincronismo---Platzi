const fetchData = require ("./utils/fetchData");
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)

//Se hace un primer llamado y luego de que resuelve:
    .then(data => {
        //Presento la info 
        console.log(data.info.count);
        //Retorno una nueva petición 
        return fetchData("${API}${data.results[0].id}");
    })
    .then (data => {
        console.log(data.name);
        return fetchData(data.origin.url);
    })
    .then (data => {
        console.log(data.dimension);
    })
    //Mostrar el error
    .catch(err => console.error(err));