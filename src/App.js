import React,{useEffect} from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import HeaderComponent from './Componants/CommonComponent/HeaderComponent';
import FooterComponent from './Componants/CommonComponent/FooterComponent';
import HomeComponent from "./Componants/Home/HomeComponent";
import UserSignIn from "./Componants/User/UserSignIn"; 
import AdminSignIn from "./Componants/Admin/AdminSignIn"; 
import UserInfo from "./Componants/Admin/UserInfo"; 
import ProductDetails from "./Componants/Home/ProductDetails";



function App() { 
  return (
    <div className="App">
       <Router> 
          <HeaderComponent /> 
            <Switch>        
              <Route path="/productDetails/:Pid" component={ProductDetails} /> 
              <Route path="/admin/user-info" component={UserInfo} /> 
              <Route path="/admin/sign-in" component={AdminSignIn} />  
              <Route path="/sign-in" component={UserSignIn} /> 
              <Route path="/" component={HomeComponent} />
            </Switch> 
          <FooterComponent /> 
      </Router>
    </div>
  );
}

export default App;
