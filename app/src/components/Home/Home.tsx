import { useState } from "react";
import "./Home.style.css"
import { ICustomer, dummyCustomerList } from "../../types/Customer.type";
import CustomerList from "../CustomerList/CustomerList";
import AddCustomer from "../AddCustomer/AddCustomer";
import { DisplayPagesEnum } from "../../enums/DisplayPagesEnum";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(DisplayPagesEnum.listCustomer);
  const [customerList] = useState(dummyCustomerList as ICustomer[]);

  const onAddCustomerClickHandler = () => {
    setCurrentPage(DisplayPagesEnum.addCustomer)
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
              <input type="button" value="New Customer"  onClick={onAddCustomerClickHandler}/>
            </div>
            <CustomerList list={customerList}/>
          </>
        }
        {currentPage == DisplayPagesEnum.addCustomer && <AddCustomer />}
      </section>
    </>
  )
}

export default Home;