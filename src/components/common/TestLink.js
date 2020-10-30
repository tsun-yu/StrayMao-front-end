import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import AdoptionTest from "../adoption/Test";
import CartTest from "../cart/Test";
import HomeTest from "../homapage/Test";
import MemberTest from "../membership/Test";
import SocialTest from "../social_media/Test";
import StoreTest from "../store/Test";

function TestLink() {
  return (
    <>
    <Router>

        <Link to="/adoptionTest">adoption</Link>
        <br />
        <Link to="/homeTest">homepage</Link>
        <br />
        <Link to="/cartTest">cart</Link>
        <br />
        <Link to="/memberTest">membership</Link>
        <br />
        <Link to="/socialTest">social_media</Link>
        <br />
        <Link to="/storeTest">store</Link>

        <Switch>
          {/* 注意：要加上網址參數 */}
          <Route exact path="/">
            {/*要連線的網頁*/}
            {/* <Page1/> */}
            {/* <PageBar /> */}
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
          </Route>
        </Switch>
      
    </Router>
    </>
  );
}

export default TestLink;
