import { FILMS_URL, PEOPLE_URL, VEHICLES_URL, PLANETS_URL } from './constants';

export default class ApiUtils {

  fetchApiData(url) {
    switch (url) {
      case 'films':
        return this.initialFetch(FILMS_URL);
      case 'people':
        return this.initialFetch(PEOPLE_URL)
          .then(arrOfPeople => this.getPeopleHomeworlds(arrOfPeople))
          .then(arrOfPeople => this.getPeopleSpecies(arrOfPeople))
          .then(arrOfPeople => this.applyDataType(arrOfPeople, 'person'));
      case 'planets':
        return this.initialFetch(PLANETS_URL)
          .then(arrOfPlanets => this.getPlanetResidents(arrOfPlanets))
          .then(arrOfPlanets => this.applyDataType(arrOfPlanets, 'planet'));
      case 'vehicles':
        return this.initialFetch(VEHICLES_URL)
          .then(arrOfVehicles => this.applyDataType(arrOfVehicles, 'vehicle'));
      case 'favorites':
        return new Promise(resolve => resolve(this.getFromCache(url)));
      default:
        return this.initialFetch(url);
    }
  }

  applyDataType(data, type) {
    data.results.forEach((e) => {
      Object.assign(e, { data_type: type });
    });
    return data;
  }

  getPlanetResidents(data) {
    data.results.forEach((planet, i) => {
      const promises = planet.residents.map(url => fetch(url).then(payload => payload.json()));

      Promise.all(promises).then((residents) => {
        const peopleArr = [];
        residents.map(people => peopleArr.push(people.name));
        Object.assign(data.results[i], { resident_names: peopleArr });
      });
    });
    return data;
  }

  initialFetch(url) {
    return fetch(url)
            .then(payload => payload.json())
            .catch(err => console.log(`error fetching ${url}`, err));
  }

  getPeopleHomeworlds(data) {
    const promises = data.results.map(p => fetch(p.homeworld).then(res => res.json()));
    Promise.all(promises).then((arrOfWorlds) => {
      arrOfWorlds.forEach((world, i) => {
        Object.assign(data.results[i],
          { homeworld_name: world.name, homeworld_population: world.population });
      });
    });
    return data;
  }

  getPeopleSpecies(data) {
    const promises = data.results.map(p => fetch(p.species).then(res => res.json()));
    Promise.all(promises).then((arrOfSpecies) => {
      arrOfSpecies.forEach((species, i) => {
        Object.assign(data.results[i],
          { species: species.name, language: species.language });
      });
    });
    return data;
  }

  saveToCache(key, data) {
    // console.log('saving data to cache', data);
    // localStorage.setItem(key, JSON.stringify(data));
  }

  getFromCache(key) {
    const cache = JSON.parse(localStorage.getItem(key)) || [];
    // console.log('getting data from cache', cache);
    return cache;
    // return JSON.parse(localStorage.getItem(key)) || [];
  }

}
