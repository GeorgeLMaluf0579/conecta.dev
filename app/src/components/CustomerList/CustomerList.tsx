import { ICustomer } from "../../types/Customer.type";
import "./CustomerList.style.css"

type Props = {
  list: ICustomer[]
}


const CustomerList = (props: Props) => {
  const { list } = props;

  return(
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
                <input type="button" value="Edit" />
                <input type="button" value="Delete" />
              </div>
            </td>
          </tr>
        )
      })}
      </tbody>
    </table>
  );
}

export default CustomerList;