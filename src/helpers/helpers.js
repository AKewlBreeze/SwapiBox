
export default class ApiUtils{

fetchApiData(dataType){
return fetch('http://swapi.co/api/films/').then((response)=>{
    return response.json()
//   }).then((film)=>{
//     return fetch
//     return film.title.toUpperCase()
//   }).then((planets)=>{
//     return response.json()
//   }).then((planetPop)=>{
//     return planets.population
//   })
//   console.log(dataType)
})
}

saveToLocalStorage(data){}

getFromLocalStorage(data){}





}
