import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

//Importing Pages
import Home from "./Home";
import FriendsList from "./friendslist";
import Insights from "./insights";
import Import_FL from "./import";
import Support from "./support";
import Landing from "./Landing";
import LogIn from "./login";

//Creating Root
const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path = "/" component = {Landing} />
      <Route path = "/FriendsList" component = {FriendsList} />
      <Route path = "/Home" component = {Home} />
      <Route path = "/Insights" component = {Insights} />
      <Route path = "/Import_FL" component = {Import_FL} />
      <Route path = "/Support" component = {Support} />
      <Route path = "/Landing" component = {Landing} />
      <Route path = "/LogIn" component = {LogIn} />
    </Switch>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
