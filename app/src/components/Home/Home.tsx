import { useEffect, useState } from "react";
import CustomerList from "../CustomerList/CustomerList";
import AddCustomer from "../AddCustomer/AddCustomer";
import CustomerDataService from "../../services/CustomerDataService";
import { DisplayPagesEnum } from "../../enums/DisplayPagesEnum";
import EditCustomer from "../EditCustomer/EditCustomer";
import { ICustomer } from "../../types/Customer.type";
import "./Home.style.css"

const Home = () => {
  const [currentPage, setCurrentPage] = useState(DisplayPagesEnum.listCustomer);
  const [currentCustomerId, setCurrentCustomerId] = useState(0);
  const [customersList, setCustomersList] = useState<ICustomer[]>([]);
  const [searchName, setSearchName] = useState('');

  async function fetchCustomersList(searchTerm: string) {
    if (typeof searchTerm === 'string' && searchTerm.trim().length === 0) {
      CustomerDataService.getAll()
        .then((response: { data: ICustomer[]}) => {
          setCustomersList(response.data);
        });
    } else {
      CustomerDataService.searchByName(searchTerm)
        .then((response: { data: ICustomer[]}) => {
          setCustomersList(response.data);
        })
    }
  }

  useEffect(() => {
    fetchCustomersList(searchName)
  }, [])

  const onAddCustomerClick = () => {
    setCurrentPage(DisplayPagesEnum.addCustomer)
  }

  const onSearchClick = (e:any) => {
    e.preventDefault();
    fetchCustomersList(searchName);
  }

  const showListPage = () => {
    setCurrentPage(DisplayPagesEnum.listCustomer)
  }

  const onSearchChange = (e: any) => {
    setSearchName(e.target.value)
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
            <div className="section-bar" >
              <div className="section-header">
                <h3>Customers</h3>
                <div>
                  <form onSubmit={onSearchClick}>
                    <input type="text" placeholder="Search by name" onChange={onSearchChange} />
                    <input type="submit" value="Search" />
                  </form>
                </div>
                <input className="add-customer-btn" type="button" value="New Customer"  onClick={onAddCustomerClick}/>
              </div>
            </div>
            <hr />
            <CustomerList customersList={customersList}  onEditClickHnd={editCustomer} />
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