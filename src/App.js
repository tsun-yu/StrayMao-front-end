import React, { useState, useEffect } from "react";

import MyNavbar from "./components/common/MyNavbar";
import MyFooter from "./components/common/MyFooter";
import MainContent from "./components/common/MainContent";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import TestLink from "./components/common/TestLink";
import AdoptionTest from "./components/adoption/Test";
import AdoptionList from "./components/adoption/AdopListPage";
import AdoptionDetail from "./components/adoption/AdopDetailPage";
import CartTest from "./components/cart/Test";
import HomeTest from "./components/homapage/Test";
import MemberTest from "./components/membership/Test";
import SocialTest from "./components/social_media/Test";
import StoreTest from "./components/store/Test";
import StrayMaoP2 from "./components/store/StrayMaoP2";
import StrayMaoP3 from "./components/store/StrayMaoP3";

function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          <Switch>
            {/* 注意：要加上網址參數 */}

            <Route exact path="/"></Route>
            <Route path="/test">
              {/*要連線的網頁*/}
              <TestLink />
            </Route>
            <Route path="/adoptionTest">
              {/*要連線的網頁*/}
              <AdoptionTest />
            </Route>
            <Route path="/adoptionList">
              {/*要連線的網頁*/}
              <AdoptionList />
            </Route>
            <Route path="/adoptionDetail">
              {/*要連線的網頁*/}
              <AdoptionDetail />
            </Route>
            <Route path="/cartTest">
              {/*要連線的網頁*/}
              <CartTest />
            </Route>
            <Route path="/homeTest">
              {/*要連線的網頁*/}
              <HomeTest />
            </Route>
            <Route path="/memberTest">
              {/*要連線的網頁*/}
              <MemberTest />
            </Route>
            <Route path="/socialTest">
              {/*要連線的網頁*/}
              <SocialTest />
            </Route>
            <Route path="/store">
              {/*要連線的網頁*/}
              <StoreTest />
            </Route>
            <Route path="/storeP2">
              {/*要連線的網頁*/}
              <StrayMaoP2 />
            </Route>
            <Route path="/storeP3">
              {/*要連線的網頁*/}
              <StrayMaoP3 />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  );
}

export default App;
