import axios from "axios";



class GeolocationApi {

  private url = "https://ipgeolocation.abstractapi.com/v1/";
  private apiKey: string

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  getGeolocationData = () => {
    return axios.get(this.url + '?api_key=' + this.apiKey).then(response => response.data as GeolocationResponse.RootObject)
  }
}



export default new GeolocationApi(process.env.REACT_APP_GEOLOCATION_API_KEY as string)