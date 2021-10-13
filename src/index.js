import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "../src/Assets/index.css";
import { Navbar } from "./Components/index";
import { Home, CreateBlog, BlogDetail } from "./Views/index";

ReactDOM.render(
  <Router>
    <div className="main-content">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/create' component={CreateBlog} />
        <Route path='/details/:id' component={BlogDetail} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
