import http from "../requests/http-common";
import { ICustomer } from "../types/Customer.type";

class CustomerDataService {
  getAll() { 
    return http.get<ICustomer[]>("/customers");
  }
}

export default new CustomerDataService;