import http from "../requests/http-common";
import { IKind } from "../types/Kind.type";

class KindDataService {
  getAll() {
    return http.get<Array<IKind>>("/kinds");
  }
}

export default new KindDataService();