import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// primary
export default function NavBar() {
  let cart = useSelector((state) => state.cart);
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="nav-link">
              Cart
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/products"} className="nav-link">
              Products
            </Link>
            <Link to={"/cart"} className="nav-link">
              Cart - {cart.length}
            </Link>
            {/* <Nav.Link href="#features">Features</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
