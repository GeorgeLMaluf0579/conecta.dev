import http from "../requests/http-common";
import { ICustomer } from "../types/Customer.type";

class CustomerDataService {
  getAll() { 
    return http.get<ICustomer[]>("/customers");
  }

  getById( id: number) {
    return http.get<ICustomer>(`/customers/${id}`)
  }

  searchByName(name:string) {
    return http.get<ICustomer[]>(`/customers/search?name=${name}`)
  }

  create( data: any) {
    return http.post<ICustomer>("/customers", data);
  }

  update(id: number, data: any) {
    return http.put<ICustomer>(`/customers/${id}`, data);
  }

  delete( id: number) {
    return http.delete<any>(`/customers/${id}`);
  }
}

export default new CustomerDataService;