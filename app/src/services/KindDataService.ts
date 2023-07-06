import http from "../requests/http-common";
import { IKind } from "../types/Kind.type";

class KindDataService {
  getAll() {
    return http.get<IKind[]>("/kinds");
  }
}

export default new KindDataService();