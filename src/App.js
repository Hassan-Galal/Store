import React ,{Component} from 'react';
import {Switch , Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import Cart from "./component/Cart";
import ProductList from "./component/ProductList";
import Details from "./component/Details";
import Noroute from "./component/Noroute";
class App extends Component{ 
  render(){
    //the content of the app that passes to HTML script
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>           

          <Route path="/home" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          
          <Route component={Noroute}/>
          
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
