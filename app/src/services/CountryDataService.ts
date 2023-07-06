import http from "../requests/http-common";
import { ICountry } from "../types/Country.type";

class CountryDataService {
  getAll() {
    return http.get<ICountry[]>("/countries");
  }
}

export default new CountryDataService();