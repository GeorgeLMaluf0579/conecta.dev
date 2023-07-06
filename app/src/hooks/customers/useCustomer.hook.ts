import { useState, useEffect } from "react"
import { ICustomer } from "../../types/Customer.type";
import CustomerDataService from "../../services/CustomerDataService";

export const useCustomer = (customer_id: number) => {
  const [customer, setCustomer] = useState<ICustomer | null>(null)

  async function fetchCustomersList(id: number) {
    CustomerDataService.getById(id)
      .then((response: { data: ICustomer}) => {
        setCustomer(response.data)
        console.log(response.data)
      })
  }

  useEffect(() => {
    fetchCustomersList(customer_id)
  }, [])

  return { customer }
}