import { useState, useEffect } from "react"
import CountryDataService from "../../services/CountryDataService"
import { ICountry } from "../../types/Country.type"

export const useCountriesList = () => {
  const [countriesList, setCountriesList] = useState<any>([])

  async function fetchCountriesList() {
    CountryDataService.getAll()
      .then((response: {data: ICountry[]}) => {
        setCountriesList(response.data)
      });
  };

  useEffect(() => {
    fetchCountriesList()
  }, [])

  return { countriesList }
}