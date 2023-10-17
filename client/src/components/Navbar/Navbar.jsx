import React from "react";
import Auth from "../../../utils/auth";
import { Link } from "react-router-dom";
import twistedTrout from "../../assets/images/twisted-trout.svg";
import "./Navbar.css";
import account from "../../assets/images/account.png";
import logout from "../../assets/images/logout.png";
import orderHistory from "../../assets/images/orderHistory.png";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory"  className="tooltip" data-tip="orderHistory">
              <img className="h-8 w-8 icons" src={orderHistory} />
            </Link>
          </li>
          <li>
            <Link to={"/profile"} className="tooltip" data-tip="Profile">
              <img className="h-8 w-8 icons" src={account} />
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <div className="tooltip" data-tip="Logout">
              <img
                className="h-8 w-8 icons"
                src={logout}
                onClick={Auth.logout}
              />
            </div>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row content">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">Twisted Trout</Link>
      </h1>

      <div className="image-wrapper">
        <Link to={"/"}>
          <img className="mask mask-circle bg-white " src={twistedTrout} />
        </Link>
      </div>
      <nav>{showNavigation()}</nav>

      <div className="text-center slogan-text">
        <p className="text-3xl font-bold">
          ✨Trout has the sale if you have the scales. We always roll nat
          20&#39;s so delivery is instant using Teleportation!✨
        </p>
      </div>
    </header>
  );
}

export default Nav;
