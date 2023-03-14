import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path='/products/:id' component={ProductDetails} />
            <Route path="/products" render={(props) => <Products sortBy='newest' {...props} />} />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Redirect from='/messages' to='/posts' />
            <Route path='/not-found' component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to='/not-found' />

          </Switch>


        </div>
      </div>

    );
  }
}

export default App;

//single page apps or spas
//in navigating from one page to another , only update content area

//route component passes 3 props to component

//passing additional props to components
//use render attribute

//pass route parameters :/
//params in route are required

//optional parameters, append ?
//regular expression in js

//include optional params in query string
// append to url with ?

//redirects
//move resources from one url to another => use redirect

