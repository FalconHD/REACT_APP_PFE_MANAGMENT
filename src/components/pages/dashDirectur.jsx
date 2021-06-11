
import Sidebar from "../dashdirecteur/sidebar/Sidebar";
import Topbar from "../dashdirecteur/topbar/Topbar";
import "../../App.css";
import Home from "./home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "../pages/userList/UserList";
import User from "../pages/user/User";
import NewUser from "../pages/newUser/NewUser";
import ProductList from "../pages/productList/ProductList";
import Product from "../pages/product/Product";
import NewProduct from "../pages/newProduct/NewProduct";
import HeaderEnDash from "../encadrantDash/header";
const Dashdirecteur = () => {
    return ( 
        <Router>
       <div className="app-container">

<HeaderEnDash/>



      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/dashdirecteur">
            <Home />
          </Route>
          <Route path="/dashdirecteur/users">
            <UserList />
          </Route>
          <Route path="/dashdirecteur/user/:userId">
            <User />
          </Route>
          <Route path="/dashdirecteur/newUser">
            <NewUser />
          </Route>
          <Route path="/dashdirecteur/products">
            <ProductList />
          </Route>
          <Route path="/dashdirecteur/product/:productId">
            <Product />
          </Route>
          <Route path="/dashdirecteur/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div></div>
    </Router>
     );
}
 
export default Dashdirecteur;