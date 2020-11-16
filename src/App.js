import React, { useState, useEffect } from 'react'
import MyNavbar from './components/common/MyNavbar'
import HomeNavbar from './components/homapage/HP-component/HomeNavbar'
import MyFooter from './components/common/MyFooter'
import HomeFooter from './components/homapage/HP-component/HomeFooter'
import MainContent from './components/common/MainContent'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import TestLink from './components/common/TestLink'
import AdoptionTest from './components/adoption/Test'
import AdoptionList from './components/adoption/AdopListPage'
import AdoptionMain from './components/adoption/AdopMainPage'
import AdoptionDetail from './components/adoption/AdopDetailPage'
import CartTest from './components/cart/Test'
import CartList from './components/cart/CartList'
import Buy from './components/cart/Buy'
import OrderList from './components/cart/OrderList'
import Order from './components/cart/Order'
import HomeTest from './components/homapage/Test'

// 會員中心
import Member from './components/membership/Member'

import SocialTest from './components/social_media/Test';
import SocialForum from './components/social_media/SocialForum';
import AddForumCard from './components/social_media/AddForumCard';
import StoreTest from './components/store/Test'
import StrayMaoP2 from './components/store/StrayMaoP2'
import StrayMaoP3 from './components/store/StrayMaoP3'
import StrayMaoDogs from './components/store/StrayMaoDogs'
import StrayMaoNews from './components/store/StrayMaoNews'
import Try from './components/store/Try'
import AdopFormPage from './components/adoption/AdopFormPage'
import AdopFormPage2 from './components/adoption/AdopFormPage2'
import AdopFormPage3 from './components/adoption/AdopFormPage3'
import AdopFormPage4 from './components/adoption/AdopFormPage4'
import Donate from './components/homapage/Donate'
import ChatRoomSvg from './components/store/ChatRoomSvg'
import ChatRoom from './components/store/ChatRoom'

function App() {
  const [navbar, setNavbar] = useState(<MyNavbar />)
  const [footer, setFooter] = useState(<MyFooter />)
  const [home, setHome] = useState(false)

  useEffect(() => {
    if (home) {
      setNavbar(<HomeNavbar />)
    } else {
      setNavbar(<MyNavbar />)
    }
  }, [home])

  useEffect(() => {
    if (home) {
      setFooter(<HomeFooter />)
    } else {
      setFooter(<MyFooter />)
    }
  }, [home])

  return (
    <Router>
      <>
        {navbar}
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
            <Route path="/adoptionMain">
              {/*要連線的網頁*/}
              <AdoptionMain />
            </Route>
            <Route path="/adoptionList">
              {/*要連線的網頁*/}
              <AdoptionList />
            </Route>
            <Route path="/adoptionDetail">
              {/*要連線的網頁*/}
              <AdoptionDetail />
            </Route>
            <Route path="/adoptionform">
              {/*要連線的網頁*/}
              <AdopFormPage />
            </Route>
            <Route path="/adoptionform2">
              {/*要連線的網頁*/}
              <AdopFormPage2 />
            </Route>
            <Route path="/adoptionform3">
              {/*要連線的網頁*/}
              <AdopFormPage3 />
            </Route>
            <Route path="/adoptionform4">
              {/*要連線的網頁*/}
              <AdopFormPage4 />
            </Route>
            <Route path="/CartList">
              {/*要連線的網頁*/}
              <CartList />
            </Route>
            <Route path="/cartTest">
              {/*要連線的網頁*/}
              <CartTest />
            </Route>
            <Route path="/Buy">
              {/*要連線的網頁*/}
              <Buy />
            </Route>
            <Route path="/OrderList">
              {/*要連線的網頁*/}
              <OrderList />
            </Route>
            <Route path="/Order">
              {/*要連線的網頁*/}
              <Order />
            </Route>
            <Route path="/homeTest">
              {/*要連線的網頁*/}
              <HomeTest setHome={setHome} />
            </Route>
            <Route path="/donate">
              {/*要連線的網頁*/}
              <Donate />
            </Route>

            {/*會員中心start*/}
            <Route path="/member">
              <Member />
            </Route>
            <Route path="/memberInfo">
              <Member />
            </Route>
            <Route path="/signInForm">
              <Member />
            </Route>
            <Route path="/myComment">
              <Member />
            </Route>
            <Route path="/petArea">
              <Member />
            </Route>
            <Route path="/registeredForm">
              <Member />
            </Route>
            <Route path="/myFavorite">
              <Member />
            </Route>
            <Route path="/passwordChange">
              <Member />
            </Route>
            {/*會員中心End*/}

            <Route path="/socialTest">
              {/*要連線的網頁*/}
              <SocialTest />
            </Route>
            <Route path="/socialForum">
              {/*要連線的網頁*/}
              <SocialForum />
            </Route>
            <Route path="/addForum">
              {/*要連線的網頁*/}
              <AddForumCard />
            </Route>
            <Route path="/store">
              {/*要連線的網頁*/}
              <StoreTest />
            </Route>
            <Route path="/storeCats">
              {/*要連線的網頁*/}
              <StrayMaoP2 />
            </Route>
            <Route path="/storeP3">
              {/*要連線的網頁*/}
              <StrayMaoP3 />
            </Route>
            <Route path="/storeDogs">
              {/*要連線的網頁*/}
              <StrayMaoDogs />
            </Route>
            <Route path="/storeNews">
              {/*要連線的網頁*/}
              <StrayMaoNews />
            </Route>
            <Route path="/Chatroom">
              {/*要連線的網頁*/}
              <ChatRoom />
            </Route>
            <Route path="/ChatroomSvg">
              {/*要連線的網頁*/}
              <ChatRoomSvg />
            </Route>
          </Switch>
        </MainContent>
        {footer}
      </>
    </Router>
  )
}

export default App
