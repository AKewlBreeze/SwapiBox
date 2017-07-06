import filmsData from '../test/data/films';
import { FILMS_URL, PEOPLE_URL, VEHICLES_URL, PLANETS_URL } from './constants';

export default class ApiUtils {

  fetchApiData(requestType) {
    switch (requestType) {
      case 'films': {
        return fetch(FILMS_URL).then(res => res.json());
      }
      case 'people': {
        return fetch(PEOPLE_URL)
          .then(payload => payload.json())
          .then((arrOfPeople) => {
            const unresolvedPromises = arrOfPeople.results.map((person) => {
              return fetch(person.homeworld).then(payload => payload.json());
            });
            return Promise.all(unresolvedPromises).then((arrOfWorlds) => {
              return arrOfWorlds.map((world, i) => {
                return Object.assign(arrOfPeople.results[i],
                  { homeworld_name: world.name, homeworld_population: world.population });
              });
            });
          })
          .then((arrOfPeople) => {
            const unresolvedPromises = arrOfPeople.map((person) => {
              return fetch(person.species).then(payload => payload.json());
            });
            return Promise.all(unresolvedPromises).then((arrOfSpecies) => {
              return arrOfSpecies.map((species, i) => {
                return Object.assign(arrOfPeople[i],
                  { species: species.name, language: species.language });
              });
            });
          })
          .then((final) => {
            return final;
          });
      }
      case 'planets':
        return fetch(`http://swapi.co/api/${requestType}/`).then((response) => {
          return response.json();
        });
      case 'vehicles':
        return fetch(`http://swapi.co/api/${requestType}/`).then((response) => {
          return response.json();
        });
      default:
        return fetch(requestType).then((response) => {
          return response.json();
        });
    }
  }

  getPromisesFromArray(data) {
    return data.map(e => fetch(e).then(payload => payload.json()));
  }
  saveToCache(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getFromCache(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

}
