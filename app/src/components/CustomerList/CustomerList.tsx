import { useState } from "react";
import { ICustomer } from "../../types/Customer.type";
import CustomerModal from "../CustomerModal/CustomerModal";
import "./CustomerList.style.css"

type Props = {
  list: ICustomer[];
  onDeleteClickHnd: (data: ICustomer) => void
};

const CustomerList = (props: Props) => {
  const { list, onDeleteClickHnd } = props;
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState(null as ICustomer | null);

  const onDetailClick = (data: ICustomer) => {
    setCurrentCustomer(data);
    setShowCustomerModal(true)
  }

  const onCloseModalClick = () => {
    setShowCustomerModal(false)
  }

  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Kind</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {list.map(customer => {
          return (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.kind}</td>
              <td>
                <div>
                  <input type="button" value="Details" onClick={() => onDetailClick(customer)}  />
                  <input type="button" value="Edit" />
                  <input type="button" value="Delete" onClick={() => onDeleteClickHnd(customer)} />
                </div>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
      { showCustomerModal && currentCustomer != null && (
        <CustomerModal onCloseClickHnd={onCloseModalClick} customer={currentCustomer}/>
      )}
    </div>
  );
}

export default CustomerList;