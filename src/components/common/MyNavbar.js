import React, { useState, useEffect } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { GrCart } from 'react-icons/gr'

import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
        display="flex"
        className="commonNavbar"
      >
        <Navbar.Brand
          href="/homeTest"
          className="ml-5 d-flex position-relative"
        >
          <div
            style={{
              color: '#FFF1E6',
              fontFamily: 'Roboto ',
              fontSize: '60px',
            }}
          >
            Stray Mao
          </div>

          <div
            className="navLogoCN position-absolute"
            style={{ color: '#FFF1E6', fontSize: '16px', display: 'inline' }}
          >
            寵愛有家
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown title="領養" id="basic-nav-dropdown">
              <NavDropdown.Item className="hvr-sweep-to-right">
                <Nav.Link
                  as={NavLink}
                  to="/adoptionTest"
                  style={{ color: '#a5a58d' }}
                >
                  領養首頁
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="hvr-sweep-to-right">
                <Nav.Link
                  as={NavLink}
                  to="/adoptionTest"
                  style={{ color: '#a5a58d' }}
                >
                  最新商品
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="hvr-sweep-to-right">
                <Nav.Link
                  as={NavLink}
                  to="/adoptionTest"
                  style={{ color: '#a5a58d' }}
                >
                  喵咪專區
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="hvr-sweep-to-right">
                <Nav.Link
                  as={NavLink}
                  to="/adoptionTest"
                  style={{ color: '#a5a58d' }}
                >
                  狗勾專區
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="商城" id="basic-nav-dropdown">
              <NavDropdown.Item className="hvr-sweep-to-right">
                {' '}
                <Nav.Link as={NavLink} to="/store" style={{ color: '#a5a58d' }}>
                  商城首頁
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="hvr-sweep-to-right">
                <Nav.Link
                  as={NavLink}
                  to="/storeNews"
                  style={{ color: '#a5a58d' }}
                >
                  最新商品
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="hvr-sweep-to-right">
                <Nav.Link
                  as={NavLink}
                  to="/storeCats"
                  style={{ color: '#a5a58d' }}
                >
                  喵咪專區
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="hvr-sweep-to-right">
                <Nav.Link
                  as={NavLink}
                  to="/storeDogs"
                  style={{ color: '#a5a58d' }}
                >
                  狗勾專區
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="社群" id="basic-nav-dropdown">
              <NavDropdown.Item className="hvr-sweep-to-right">
                <Nav.Link
                  as={NavLink}
                  to="/socialTest"
                  style={{ color: '#a5a58d' }}
                >
                  商城首頁
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="hvr-sweep-to-right">
                <Nav.Link
                  as={NavLink}
                  to="/socialTest"
                  style={{ color: '#a5a58d' }}
                >
                  商城首頁
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="hvr-sweep-to-right">
                <Nav.Link
                  as={NavLink}
                  to="/socialTest"
                  style={{ color: '#a5a58d' }}
                >
                  商城首頁
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="hvr-sweep-to-right">
                <Nav.Link
                  as={NavLink}
                  to="/socialTest"
                  style={{ color: '#a5a58d' }}
                >
                  商城首頁
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-5">
            <div className=" ">
              <input
                className="input-brown navSearchPlaceholder"
                type="text"
                placeholder="搜尋"
                style={{ color: '#d1d1d1' }}
              ></input>
            </div>
            <Nav.Link as={NavLink} to="/">
              <i className="fas fa-search navIcon"></i>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/memberTest">
              <div className="position-relative">
                <i className="fas fa-user navIcon"></i>
                <div className="animateHeart">
                  <svg className="icon-003-heart position-fixed">
                    <path d="M23.13,9.68l-.68-5.56a.93.93,0,0,0-.35-.61L17.77.19a.89.89,0,0,0-1-.06L11.57,3.28,6.38.13a.91.91,0,0,0-1,.06L1,3.51a.93.93,0,0,0-.35.61L0,9.68a.91.91,0,0,0,.31.8l10.67,9a.91.91,0,0,0,1.16,0l10.66-9A.94.94,0,0,0,23.13,9.68Z"></path>
                  </svg>
                </div>
              </div>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/CartList">
              <i className="fas fa-shopping-cart navIcon"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
