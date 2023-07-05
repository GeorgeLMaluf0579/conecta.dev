import { useState, useEffect } from "react"
import CountryDataService from "../services/CountryDataService"
import { ICountry } from "../types/Country.type"

export const CountryList = () => {
  const [countriesList, setCountriesList] = useState<any>([])

  async function fetchCountriesList() {
    CountryDataService.getAll()
      .then((response: {data: ICountry[]}) => {
        setCountriesList(response.data)
        console.log(response.data)
      });
  };

  useEffect(() => {
    fetchCountriesList()
  }, [])

  return { countriesList }
}