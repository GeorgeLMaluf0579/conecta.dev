import { useState } from "react";
import { ICustomer } from "../../types/Customer.type";
import CustomerModal from "../CustomerModal/CustomerModal";
import "./CustomerList.style.css"
import CustomerDataService from "../../services/CustomerDataService";

type Props = {
  customersList: any | ICustomer[]
  onEditClickHnd: (customer_id: number) => void;
};

const CustomerList = (props: Props) => {
  const { customersList, onEditClickHnd } = props;
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [currentCustomerId, setCurrentCustomerId] = useState(0);

  const onDetailClick = (id: number) => {
    setCurrentCustomerId(id);
    setShowCustomerModal(true)
  };

  const onDeleteClick = (id: number) => {
    CustomerDataService.delete(id)
      .then(() => {
        window.location.reload()
      });
  };

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
                  <input type="button" value="Delete" onClick={() => onDeleteClick(customer.id)} />
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