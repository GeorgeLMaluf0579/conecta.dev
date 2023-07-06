import { useState } from "react";
import "./Home.style.css"

import CustomerList from "../CustomerList/CustomerList";
import AddCustomer from "../AddCustomer/AddCustomer";
import { DisplayPagesEnum } from "../../enums/DisplayPagesEnum";
import EditCustomer from "../EditCustomer/EditCustomer";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(DisplayPagesEnum.listCustomer);
  const [currentCustomerId, setCurrentCustomerId] = useState(0)

  // const { customerList } = useCustomersList();

  const onAddCustomerClick = () => {
    setCurrentPage(DisplayPagesEnum.addCustomer)
  }

  const showListPage = () => {
    setCurrentPage(DisplayPagesEnum.listCustomer)
  }

  const editCustomer = (id: number) => {
    setCurrentCustomerId(id);
    setCurrentPage(DisplayPagesEnum.editCustomer);
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
            <CustomerList onEditClickHnd={editCustomer} />
          </>
        }
        {currentPage == DisplayPagesEnum.addCustomer && ( 
          <AddCustomer onBackButtonClickHnd={showListPage} />
        )}
        {currentPage == DisplayPagesEnum.editCustomer && currentCustomerId != 0 && (
          <EditCustomer customer_id={currentCustomerId} onBackButtonClickHnd={showListPage} />
        )}
      </section>
    </>
  )
}

export default Home;