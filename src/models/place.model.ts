import { Place } from "../types";




export default class PlaceModel {

  public static toAppModel(apiModel: QueryPlaceResponse.Place): Place {
    return {
      key: apiModel.Key,
      generalInfo: {
        type: apiModel.Type,
        administrativeArea: {
          id: apiModel.AdministrativeArea.ID,
          localizedName: apiModel.AdministrativeArea.LocalizedName
        },
        country: {
          id: apiModel.Country.ID,
          localizedName: apiModel.Country.LocalizedName
        },
        localizedName: apiModel.LocalizedName,
        rank: apiModel.Rank
      }
    }
  }

}