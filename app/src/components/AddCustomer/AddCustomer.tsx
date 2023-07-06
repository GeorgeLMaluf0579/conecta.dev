import { useState, useEffect } from "react"
import { IKind } from "../../types/Kind.type"
import { useKindsList } from "../../hooks/kinds/useKindsList.hook"
import { useCountriesList } from "../../hooks/countries/useCountriesList.hook"
import { ICountry } from "../../types/Country.type"
import CustomerDataService from "../../services/CustomerDataService"

import "./AddCustomer.style.css"

type Props = {
  onBackButtonClickHnd: () => void
}

const AddCustomer = (props: Props) => {
  const {onBackButtonClickHnd } = props 
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  

  const { kindsList } = useKindsList();
  const { countriesList } = useCountriesList();
  
  const [kind, setKind] = useState(0);
  const [country, setCountry] = useState(0);

  const onNameChanged  = (e: any) => {
    setName(e.target.value)
  }

  const onEmailChanged  = (e: any) => {
    setEmail(e.target.value)
  }

  const onKindChanged  = (e: any) => {
    setKind(e.target.value)
  }

  const onCountryChanged = (e: any) =>  {
    setCountry(e.target.value)
  }

  const onSubmitButtonClick = (e:any) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      kind_id: kind,
      country_id: country,
    };

    CustomerDataService.create(data)
      .then((response: any) => {
        if (response.status === 201) {
          onBackButtonClickHnd();
        }
      })
  }

  return(
    <div className="form-container">
      <div>
        <h3>Add new Customer</h3>
      </div>
      <form onSubmit={onSubmitButtonClick}>
        <div>
          <label>Name :</label>
          <input type="text" value={name} onChange={onNameChanged}/>
        </div>
        <div>
          <label>Email :</label>
          <input type="text" value={email} onChange={onEmailChanged}/>          
        </div>
        <div>
          <label>Country :</label>
          <select onChange={onCountryChanged}>
            {countriesList && countriesList.map((c: ICountry, index: number) => (
              <option key={index} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Kind :</label>
          <select onChange={onKindChanged}>
            {kindsList && kindsList.map((k:IKind, index: number) => (
              <option key={index} value={k.id}>{k.description}</option>
            ))}
          </select>
        </div>
        <div>
          <input type="button" value="Back" onClick={ onBackButtonClickHnd } />
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  )
}

export default AddCustomer;