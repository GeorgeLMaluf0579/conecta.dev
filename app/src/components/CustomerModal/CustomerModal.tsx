import { useCustomer } from "../../hooks/customers/useCustomer.hook";
import "./CustomerModal.style.css"

type Props = {
  onCloseClickHnd: () => void
  customer_id: number;
}

const CustomerModal = (props: Props) => {
  const { onCloseClickHnd, customer_id } = props;

  const { customer } = useCustomer(customer_id);

  return (
    <>
      {customer && (
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
      )}
    </>
  )
};

export default CustomerModal;