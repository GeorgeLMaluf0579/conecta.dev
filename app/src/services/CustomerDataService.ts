import http from "../requests/http-common";
import { ICustomer } from "../types/Customer.type";

class CustomerDataService {
  getAll() { 
    return http.get<ICustomer[]>("/customers");
  }

  getById( id:number) {
    return http.get<ICustomer>(`/customers/${id}`)
  }

  create( data: any) {
    return http.post<ICustomer>("/customers", data);
  }
}

export default new CustomerDataService;