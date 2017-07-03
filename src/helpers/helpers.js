import filmsData from '../test/data/films';

export default class ApiUtils {

  fetchApiData(requestType, devFlag) {
    let returnData;
    switch (requestType) {
      case 'films':
        if (devFlag) {
          returnData = filmsData;
        } else {
          // TODO Make films API call here
        }
        break;
      case 'people':
        break;
      case 'planets':
        break;
      case 'vehicles':
        break;
      default:
        break;
    }
    return returnData;
  }

  saveToLocalStorage(data) {}

  getFromLocalStorage(data) {}

}
