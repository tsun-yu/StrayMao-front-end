import React, { useState, useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

// 選單連結要使用NavLink取代Link
import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
        
      >
        <Navbar.Brand href="#home" className="ml-5"style={{color:"#FFF1E6",fontFamily:"Roboto ",fontSize: "60px"}}>Stray Mao</Navbar.Brand>
        <Navbar.Brand href="#home" className="navLogoCN" style={{color:"#FFF1E6",fontSize: "16px"}}>寵愛有家</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            {/* 把Nav.Link作為NavLink來使用 */}
            {/* 一定要加上exact，不然首頁會一直點亮(active) */}
            <Nav.Link as={NavLink} to="/" style={{color:"#FFF1E6"}}>
              領養<i class="fas fa-caret-down"></i>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/" style={{color:"#FFF1E6"}}>
             商城<i class="fas fa-caret-down"></i>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/" style={{color:"#FFF1E6"}}>
             社群<i class="fas fa-caret-down"></i>
            </Nav.Link>
          </Nav>
          <Nav className="mr-5">
            <div className="hmSearch ">
            <input className="input-brown searchPlaceholder" type="text" placeholder="商品搜尋" style={{color:"#d1d1d1"}}></input>
            </div>
            <Nav.Link as={NavLink} to="/" style={{color:"#FFF1E6"}}>
            <i class="fas fa-search navIcon"></i>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/" style={{color:"#FFF1E6"}}>
            <i class="fas fa-user navIcon"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
