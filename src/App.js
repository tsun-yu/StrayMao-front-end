import React, { useState, useEffect } from "react";

import MyNavbar from "./components/common/MyNavbar";
import MyFooter from "./components/common/MyFooter";
import MainContent from "./components/common/MainContent";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PageBar from "./components/adoption/PageBar";
import Homapage from './components/homapage/homepage';

function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          <Switch>
            {/* 注意：要加上網址參數 */}
            <Route exact path="/">
              {/*要連線的網頁*/}
              <Homapage/>
              <PageBar />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  );
}

export default App;
