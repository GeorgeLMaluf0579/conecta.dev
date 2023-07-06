import { ICustomer } from "../../types/Customer.type";
import "./CustomerModal.style.css"

type Props = {
  onCloseClickHnd: () => void
  customer: ICustomer;
}

const CustomerModal = (props: Props) => {
  const { onCloseClickHnd, customer } = props;

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onCloseClickHnd}>&times;</span>
        <div>
          <h3>Customer Details</h3>
          <div>
            <div>
              <label>Name : {customer.name}</label>
            </div>
            <div>
              <label>Email : {customer.email} </label>
            </div>
            <div>
              <label>Country : {customer.country}</label>
            </div>
            <div>
              <label>Kind : {customer.kind}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CustomerModal;