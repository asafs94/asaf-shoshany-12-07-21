

const ApiMap = {
  queryLocations: {
    url: '/locations/v1/cities/autocomplete',
    method: 'get',
  },
  getCurrentConditions: {
    url: '/currentconditions/v1/:locationKey',
    method: 'get',
  },
  get5dayForecast: {
    url: '/forecasts/v1/daily/5day/:locationKey',
    method: 'get',
  },
  getLocationsByGeolocation: {
    url: '/locations/v1/cities/geoposition/search',
    method: 'get',
  }
} as const;


export default ApiMap