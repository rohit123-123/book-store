import logo from './logo.svg';
import './App.css';
import Customer from './pages/Customer';
import Product from './pages/Product';
import SearchProduct from './pages/SearchProduct';
import Author from './pages/Author';
import SearchAuthor from './pages/SearchAuthor';
import SearchCustomer from './pages/SearchCustomer';
import Location from './pages/Location';
import Addauthor from './pages/Addauthor';
import Publisher from './pages/Publisher';
import AddPublisher from './pages/AddPublisher';
import AddProduct from './pages/AddProduct';
import AddLocation from './pages/AddLocation';
import SearchLocation from './pages/SearchLocation';
import SearchPublisher from './pages/SearchPublisher';
import Searchedauthor from './pages/Searchedauthor';
import {BrowserRouter,Link,Route,Switch}from 'react-router-dom'
import Order from './pages/Order';
import Inventory from './pages/Inventory';
import Updateinventory from './pages/Updateinventory';
import Admin from './pages/Admin';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">


<BrowserRouter>




<Switch>
<Route path="/Author" component={Author}/>
<Route path="/SearchAuthor" component={SearchAuthor}/>  
<Route path="/Product" component={Product}/> 
<Route path="/Customer" component={Customer}/>
<Route path="/Addauthor" component={Addauthor}/>
<Route path="/Publisher" component={Publisher}/>
<Route path="/AddPublisher" component={AddPublisher}/>
<Route path="/AddProduct" component={AddProduct}/>
<Route path="/Location" component={Location}/>
<Route path="/AddLocation" component={AddLocation}/>
<Route path="/SearchProduct" component={SearchProduct}/>
<Route path="/SearchCustomer" component={SearchCustomer}/>
<Route path="/SearchLocation" component={SearchLocation}/>
<Route path="/SearchPublisher" component={SearchPublisher}/>
<Route path="/Searchedauthor" component={Searchedauthor}/>
<Route path="/Order" component={Order}/>
<Route path="/Inventory" component={Inventory}/>
<Route path="/Updateinventory" component={Updateinventory}/>
<Route path="/Admin" component={Admin}/>
<Route path="/Homeadmin" component={Home}/>
</Switch>
<ul> 



    
    
    
     
    </ul>



    </BrowserRouter>
    
    </div>
  );
}

export default App;
