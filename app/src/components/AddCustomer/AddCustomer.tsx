import { useState } from "react"
import "./AddCustomer.style.css"
import { ICustomer } from "../../types/Customer.type"

type Props = {
  onBackButtonClickHnd: () => void
  onSubmitButtonClickHnd: (data: ICustomer) => void
}

const AddCustomer = (props: Props) => {
  const {onBackButtonClickHnd,
         onSubmitButtonClickHnd } = props 
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [kind, setKind] = useState("");

  const onNameChanged  = (e: any) => {
    setName(e.target.value)
  }

  const onEmailChanged  = (e: any) => {
    setEmail(e.target.value)
  }

  const onKindChanged  = (e: any) => {
    setKind(e.target.value)
  }

  const onSubmitButtonClick = (e:any) => {
    e.preventDefault();
    const customer: ICustomer =  {
      id: 1,
      name: name,
      email: email,
      subscriber_email: undefined,
      kind: kind,
      country: "USA",
      password: "8a6e0804-2bd0-4672",
      log_entries: 1,
      orders: 1,
      life_value: 100.2
    };
    onSubmitButtonClickHnd(customer);
    onBackButtonClickHnd();
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
          <label>Kind :</label>
          <input type="text" value={kind} onChange={onKindChanged}/>
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