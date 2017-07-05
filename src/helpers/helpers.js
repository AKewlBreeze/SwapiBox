import filmsData from '../test/data/films';

export default class ApiUtils {


  fetchApiData(requestType, devFlag) {
    let returnData;
    switch (requestType) {
      case 'films':
        if (devFlag) {
          returnData = filmsData;
        } else {
          return fetch(`http://swapi.co/api/${requestType}/`).then((response) => {
            return response.json();
          });
        }
        break;
      case 'people':
        console.log('in people');
        // return fetch(`http://swapi.co/api/${requestType}/`)
        //         .then((response) => {
        //           console.log('response', response.json());
        //           return response.json();
        //         });
        const peopleData = [];
        const homeworldsArray = [];
        const species = [];
        const people = fetch(`http://swapi.co/api/${requestType}/`)
          .then(response => response.json())
          .then((response) => {
            response.results.map((e) => {
              peopleData.push(e);
              return homeworldsArray.push(fetch(e.homeworld).then(res => res.json()));
            });
          });
        console.log(peopleData);
        const pHomeworlds = Promise.all(homeworldsArray).then((homeworlds) => {
          console.log('homeworlds', homeworlds);
        });
        // return fetch(`http://swapi.co/api/${requestType}/`)
        //   .then(response => response.json())
        //   .then((response) => {
        //     response.results.map((e) => {
        //       e.homeworld = fetch(e.homeworld).then((res) => {
        //         return res.json();
        //       });
        //       console.log(e);
        //       return e;
        //     });
        //   });
        break;
      case 'planets':
        return fetch(`http://swapi.co/api/${requestType}/`).then((response) => {
          return response.json();
        });
        break;
      case 'vehicles':
        return fetch(`http://swapi.co/api/${requestType}/`).then((response) => {
          return response.json();
        });
        break;
      default:
        return fetch(requestType).then((response) => {
          return response.json();
        });
        break;
    }
    return returnData;
  }

  saveToLocalStorage(key, data) {
    // localStorage.setItem(key, JSON.stringify(data));
  }

  getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

}
