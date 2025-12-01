import React from "react";
import "./header.css";
import AnchorTemporaryDrawer from "./Drawer";
import { Link } from "react-router-dom";
import Btn from "../Button/Btn";

function Header() {
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker<span>.</span>{" "}
      </h1>

      <div className="links">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/wishlist">
          <p className="link">Wishlist</p>
        </Link>
        <Link to="/dashboard">
          <Btn text={"Dashboard"} onClick={() => console.log("Btn clicked")} />
        </Link>
      </div>
      <div className="mobile_drawer">
        <AnchorTemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
