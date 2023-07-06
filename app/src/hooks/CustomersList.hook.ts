import { useState, useEffect } from "react"
import { ICustomer } from "../types/Customer.type";
import CustomerDataService from "../services/CustomerDataService";

export const CustomersList = () => {
  const [customersList, setCustomersList] = useState<any>([])

  async function fetchCustomersList() {
    CustomerDataService.getAll()
      .then((response: { data: ICustomer[]}) => {
        setCustomersList(response.data)
        console.log(response.data)
      })
  }

  useEffect(() => {
    fetchCustomersList()
  }, [])

  return { customersList }
}