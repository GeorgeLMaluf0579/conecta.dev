import { useState, useEffect } from "react"
import { ICustomer } from "../../types/Customer.type";
import CustomerDataService from "../../services/CustomerDataService";

export const useCustomer = (customer_id: number) => {
  const [customer, setCustomer] = useState<ICustomer | any>()

  async function fetchCustomer(id: number) {
    CustomerDataService.getById(id)
      .then((response: { data: ICustomer}) => {
        setCustomer(response.data)
      })
  }

  useEffect(() => {
    fetchCustomer(customer_id)
  }, [])

  return { customer }
}