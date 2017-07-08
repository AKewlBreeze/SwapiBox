import { FILMS_URL, PEOPLE_URL, VEHICLES_URL, PLANETS_URL } from './constants';

export default class ApiUtils {

  fetchApiData(url) {
    switch (url) {
      case 'films':
        return this.initialFetch(FILMS_URL);
      case 'people':
        return this.initialFetch(PEOPLE_URL)
             .then(arrOfPeople => this.getPeopleSubdata(arrOfPeople))
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

  getPeopleSubdata(data) {
    return Promise.all([this.getPeopleHomeworlds(data), this.getPeopleSpecies(data)])
      .then(() => data)
      .catch(err => console.log(err));
  }

  getPlanetResidents(data) {
    // TODO This isn't working in that the object.assign
    // is never persisting to the planet objects the way it should.
    data.results.map((planet, i) => {
      const promises = planet.residents.map(url => fetch(url).then(payload => payload.json()));

      return Promise.all(promises).then((residents) => {
        const peopleArr = [];
        residents.map(people => peopleArr.push(people.name));
        return Object.assign(data.results[i], { resident_names: peopleArr });
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
    return Promise.all(promises).then((arrOfWorlds) => {
      return arrOfWorlds.map((world, i) => {
        return Object.assign(data.results[i],
          { homeworld_name: world.name, homeworld_population: world.population });
      });
    });
  }

  getPeopleSpecies(data) {
    const promises = data.results.map(p => fetch(p.species).then(res => res.json()));
    return Promise.all(promises).then((arrOfSpecies) => {
      return arrOfSpecies.map((species, i) => {
        return Object.assign(data.results[i],
          { species_name: species.name, language: species.language });
      });
    });
  }

  saveToCache(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getFromCache(key) {
    return JSON.parse(localStorage.getItem(key));
  }

}
