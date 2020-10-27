import React, { useState, useEffect } from "react";

import MyNavbar from "./components/common/MyNavbar";
import MyFooter from "./components/common/MyFooter";
import MainContent from "./components/common/MainContent";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PageBar from "./components/adoption/PageBar";
<<<<<<< HEAD
import Homapage from './components/homapage/homepage';
=======
import Page1 from "./components/homapage/Page1";
import TestLink from "./components/common/TestLink";
>>>>>>> e57d5fa7be041092d4c4b7db83ae25ac95cf8878

import AdoptionTest from "./components/adoption/Test";
import CartTest from "./components/cart/Test";
import HomeTest from "./components/homapage/Test";
import MemberTest from "./components/membership/Test";
import SocialTest from "./components/social_media/Test";
import StoreTest from "./components/store/Test";
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
<<<<<<< HEAD
              <Homapage/>
              <PageBar />
=======
              {/* <Page1/> */}
              {/* <PageBar /> */}
              <TestLink />
            </Route>
            <Route path="/adoptionTest">
              {/*要連線的網頁*/}
              <AdoptionTest />
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
            <Route path="/storeTest">
              {/*要連線的網頁*/}
              <StoreTest />
>>>>>>> e57d5fa7be041092d4c4b7db83ae25ac95cf8878
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  );
}

export default App;
