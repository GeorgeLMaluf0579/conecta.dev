import { useState } from "react";
import "./Home.style.css"
import { ICustomer, dummyCustomerList } from "../../types/Customer.type";
import CustomerList from "../CustomerList/CustomerList";
import AddCustomer from "../AddCustomer/AddCustomer";
import { DisplayPagesEnum } from "../../enums/DisplayPagesEnum";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(DisplayPagesEnum.listCustomer);
  const [customerList, setCustomerList] = useState(dummyCustomerList as ICustomer[]);

  const onAddCustomerClick = () => {
    setCurrentPage(DisplayPagesEnum.addCustomer)
  }

  const showListPage = () => {
    setCurrentPage(DisplayPagesEnum.listCustomer)
  }

  const addCustomer = (data: ICustomer) =>  {
    setCustomerList([...customerList, data])
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
            <div>
              Customers
              <input type="button" value="New Customer"  onClick={onAddCustomerClick}/>
            </div>
            <CustomerList list={customerList}/>
          </>
        }
        {currentPage == DisplayPagesEnum.addCustomer && ( 
          <AddCustomer onBackButtonClickHnd={showListPage} onSubmitButtonClickHnd={addCustomer}  />
        )}
      </section>
    </>
  )
}

export default Home;