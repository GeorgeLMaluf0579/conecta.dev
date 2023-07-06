import { useState } from "react";
import { ICustomer } from "../../types/Customer.type";
import CustomerModal from "../CustomerModal/CustomerModal";
import { useCustomersList } from "../../hooks/customers/useCustomersList.hook";

import "./CustomerList.style.css"

type Props = {
  onDeleteClickHnd: (data: ICustomer) => void;
  onEditClickHnd: (data: ICustomer) => void;
};

const CustomerList = (props: Props) => {
  const { onDeleteClickHnd, onEditClickHnd } = props;
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [currentCustomerId, setCurrentCustomerId] = useState(0);

  const { customersList } = useCustomersList();

  const onDetailClick = (id: number) => {
    setCurrentCustomerId(id);
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
            <th>Country</th>
            <th>Kind</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {customersList && customersList.map((customer: ICustomer, index: number) => {
          return (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.country}</td>
              <td>{customer.kind}</td>
              <td>
                <div>
                  <input type="button" value="Details" onClick={() => onDetailClick(customer.id)}  />
                  <input type="button" value="Edit" onClick={()=> onEditClickHnd(customer.id)} />
                  <input type="button" value="Delete" onClick={() => onDeleteClickHnd(customer.id)} />
                </div>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
      { showCustomerModal && (
        <CustomerModal onCloseClickHnd={onCloseModalClick} customer_id={currentCustomerId}/>
      )}
    </div>
  );
}

export default CustomerList;