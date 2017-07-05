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
      return fetch(`http://swapi.co/api/${requestType}/`).then((response) => {
        return response.json();
      });
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
        break;
    }
    return returnData;
  }

  saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

}
