import filmsData from '../test/data/films';

export default class ApiUtils {

  fetchApiData(requestType) {
    let returnData;
    switch (requestType) {
      case 'films':
        returnData = filmsData;
        break;
      default:
        break;
    }
    return returnData;
  }

  saveToLocalStorage(data) {}

  getFromLocalStorage(data) {}

}
