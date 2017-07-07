import { FILMS_URL, PEOPLE_URL, VEHICLES_URL, PLANETS_URL } from './constants';

export default class ApiUtils {

  fetchApiData(requestType) {
    switch (requestType) {
      case 'films': {
        return this.initialFetch(FILMS_URL);
      }
      case 'people': {
        return this.initialFetch(PEOPLE_URL)
          .then(arrOfPeople => this.getPeopleHomeworlds(arrOfPeople.results))
          .then(arrOfPeople => this.getPeopleSpecies(arrOfPeople))
          .then(final => final);
      }
      case 'planets':
        return this.initialFetch(PLANETS_URL)
          .then((arrOfPlanets) => {
            arrOfPlanets.results.map((planet, i) => {
              const unresolvedPromises = planet.residents.map((url) => {
                return fetch(url).then(payload => payload.json());
              });

              Promise.all(unresolvedPromises)
                .then((data) => {
                  const peopleArr = [];
                  data.map((people, index) => {
                    return peopleArr.push(people.name);
                  });
                  Object.assign(arrOfPlanets.results[i], { resident_names: peopleArr });
                });
            });
            return arrOfPlanets;
          });
      case 'vehicles':
        return this.initialFetch(VEHICLES_URL);
      default:
        return this.initialFetch(requestType);
    }
  }


  initialFetch(url) {
    // console.log('from cache', this.getFromCache(url));
    return fetch(url)
            .then(payload => payload.json())
            .then((data) => {
              // console.log('fetched data: ', data);
              return data;
            })
            .catch(err => console.log(`error fetching ${url}`, err));
  }

  getPeopleHomeworlds(data) {
    const unresolvedPromises = data.map((person) => {
      return fetch(person.homeworld).then(payload => payload.json());
    });
    return Promise.all(unresolvedPromises).then((arrOfWorlds) => {
      return arrOfWorlds.map((world, i) => {
        return Object.assign(data[i],
          { homeworld_name: world.name, homeworld_population: world.population });
      });
    });
  }

  getPeopleSpecies(data) {
    const unresolvedPromises = data.map((person) => {
      return fetch(person.species).then(payload => payload.json());
    });
    return Promise.all(unresolvedPromises).then((arrOfSpecies) => {
      return arrOfSpecies.map((species, i) => {
        return Object.assign(data[i],
          { species: species.name, language: species.language });
      });
    });
  }

  getPromisesFromArray(data) {
    return data.map(e => fetch(e).then(payload => payload.json()));
  }

  saveToCache(key, data) {
    // localStorage.setItem(key, JSON.stringify(data));
  }

  getFromCache(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

}
