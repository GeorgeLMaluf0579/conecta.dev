import { useEffect, useState } from "react"
import { useKindsList } from "../../hooks/kinds/useKindsList.hook";
import { useCountriesList } from "../../hooks/countries/useCountriesList.hook";
import CustomerDataService from "../../services/CustomerDataService";

import { ICountry } from "../../types/Country.type";
import { IKind } from "../../types/Kind.type";
import { ICustomer } from "../../types/Customer.type";

import "./EditCustomer.style.css"

type Props = {
  customer_id: number;
  onBackButtonClickHnd: () => void;
}

const EditCustomer = (props: Props) => {
  const {customer_id, onBackButtonClickHnd } = props
  const { kindsList } = useKindsList();
  const { countriesList } = useCountriesList();
  const [ customer, setCustomer ] = useState<ICustomer | any>();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [kindId, setKindId] = useState<number>(0);
  const [countryId, setCountryId] = useState<number>(0);
 
  async function fetchCustomer(id: number) {
    CustomerDataService.getById(id)
    .then((response: { data: ICustomer}) => {
      setCustomer(response.data)
      var cusKind = kindsList.find((kind: IKind) => kind.description === response.data.kind) 
      var cusCountry = countriesList.find((country: ICountry) => country.name === response.data.country) 
      setName(response.data.name)
      setEmail(response.data.email)
      setKindId(cusKind.id)
      setCountryId(cusCountry.id)
    })
  }

  useEffect(() => {
    fetchCustomer(customer_id)
  },[kindsList, countriesList])


  const onNameChanged  = (e: any) => {
    setName(e.target.value)
  }

  const onEmailChanged  = (e: any) => {
    setEmail(e.target.value)
  }

  const onChangeCountry = (e: any) => {
    setCountryId(e.target.value)
  }

  const onKindChanged  = (e: any) => {
    setKindId(e.target.value)
  }

  const onSubmitButtonClick = (e:any) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      kind_id: kindId,
      country_id: countryId
    };

    CustomerDataService.update(customer_id, data)
      .then((response: any) => {
        if (response.status == 200) {
          onBackButtonClickHnd();
        }
      })
    onBackButtonClickHnd();
  }

  return(
    <>
      {customer && (
      <div className="form-container">
        <div>
          <h3>Edit Customer</h3>
        </div>
        <form onSubmit={onSubmitButtonClick}>
          <div>
            <label>Name :</label>
            <input type="text" value={name} onChange={onNameChanged} />
          </div>
          <div>
            <label>Email :</label>
            <input type="text" value={email} onChange={onEmailChanged} />          
          </div>
          <div>
            <label>Country :</label>
            <select value={countryId} onChange={onChangeCountry}>
              { countriesList && countriesList.map((c: ICountry, index: number) => (
                <option key={index} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Kind :</label>
            <select value={kindId} onChange={onKindChanged}>
              { kindsList && kindsList.map((k: IKind, index: number) => (
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
      )}
    </>
  )
}

export default EditCustomer;