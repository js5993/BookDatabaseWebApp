import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import BooksList from "./components/books-list.component";
import EditBook from "./components/edit-book.component";
import CreateBook from "./components/create-book.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={BooksList} />
      <Route path="/edit/:id" component={EditBook} />
      <Route path="/create" component={CreateBook} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
