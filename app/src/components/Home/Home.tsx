import { useState } from "react";
import "./Home.style.css"

import CustomerList from "../CustomerList/CustomerList";
import AddCustomer from "../AddCustomer/AddCustomer";
import { DisplayPagesEnum } from "../../enums/DisplayPagesEnum";
import EditCustomer from "../EditCustomer/EditCustomer";
import { ICustomer } from "../../types/Customer.type";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(DisplayPagesEnum.listCustomer);

  // const [customerList, setCustomerList] = useState(dummyCustomerList as ICustomer[]);
  const [currentCustomer, setCurrentCustomer] = useState(null as null | ICustomer)

  // const { customerList } = CustomersList();

  const onAddCustomerClick = () => {
    setCurrentPage(DisplayPagesEnum.addCustomer)
  }

  const showListPage = () => {
    setCurrentPage(DisplayPagesEnum.listCustomer)
  }

  const addCustomer = (data: ICustomer) =>  {
    // setCustomerList([...customerList, data])
  }

  const editCustomer = (data: ICustomer) => {
    setCurrentPage(DisplayPagesEnum.editCustomer);
    setCurrentCustomer(data);
  }

  const delCustomer = (data: ICustomer) => {
    // const indexToDelete = customerList.indexOf(data);
    // const tempList = [...customerList];

    // tempList.splice(indexToDelete, 1);
    // setCustomerList(tempList);
  }

  const updateCustomer = (data: ICustomer) => {
    // const filteredData = customerList.filter(x=> x.id === data.id)[0];
    // const indexToUpdate = customerList.indexOf(filteredData);
    // const tempList = [...customerList];
    // tempList[indexToUpdate] = data;
    // setCustomerList(tempList);
  }

  return(
    <>
      <article className="article-header">
        <header>
          <h1>Conecta.Dev Code Challenge</h1>
        </header>
      </article>

      <section className="section-content">
        {currentPage == DisplayPagesEnum.listCustomer && 
          <>
            <input  className="add-customer-btn" type="button" value="New Customer"  onClick={onAddCustomerClick}/>
            <div>
              <h3>Customers</h3>
              <hr />
            </div>
            <CustomerList onEditClickHnd={editCustomer} onDeleteClickHnd={delCustomer} />
          </>
        }
        {currentPage == DisplayPagesEnum.addCustomer && ( 
          <AddCustomer onBackButtonClickHnd={showListPage} onSubmitButtonClickHnd={addCustomer}  />
        )}
        {currentPage == DisplayPagesEnum.editCustomer && currentCustomer != null && (
          <EditCustomer customer={currentCustomer} onBackButtonClickHnd={showListPage} onUpdateButtonClickHnd={updateCustomer} />
        )}
      </section>
    </>
  )
}

export default Home;