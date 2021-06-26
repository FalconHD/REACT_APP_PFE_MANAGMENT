
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
import HeaderEnDashh from "../dashdirecteur/header";
const Dashdirecteur = () => {
    return ( 
        <Router>
       <div className="app-container">

<HeaderEnDashh/>



      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/dashdirecteur">
            <Home />
          </Route>
          <Route exact path="/dashdirecteur/users">
            <UserList />
          </Route>
          <Route exact path="/dashdirecteur/user/:userId">
            <User />
          </Route>
          <Route exact path="/dashdirecteur/newUser">
            <NewUser />
          </Route>
          <Route exact path="/dashdirecteur/project">
            <ProductList />
          </Route>
          <Route exact path="/dashdirecteur/project/:productId">
            <Product />
          </Route>
          <Route exact path="/dashdirecteur/newproject">
            <NewProduct />
          </Route>
        </Switch>
      </div></div>
    </Router>
     );
}
 
export default Dashdirecteur;