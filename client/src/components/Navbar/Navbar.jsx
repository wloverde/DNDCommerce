import "./Navbar.css";
import { useState } from "react";
import twistedTrout from "../../assets/images/twisted-trout.svg";
import search from "../../assets/images/magnifying-glass.svg";
import wishlist from "../../assets/images/heart.png";
import shoppingBag from "../../assets/images/shopping-bag.png";
import account from "../../assets/images/account.png";
import SearchForm from "../SearchForm/SearchForm";

const Navbar = () => {
  const [displaySearch, setDisplaySearch] = useState(false);

  return (
    <nav className='content-flex'>
      <div className='search-wrapper'>
        <img
          src={search}
          onClick={() =>
            displaySearch ? setDisplaySearch(false) : setDisplaySearch(true)
          }
        />
        {displaySearch ? <SearchForm /> : <></>}
      </div>
      <div className='image-wrapper'>
        <span>Twisted</span>
        <img src={twistedTrout} />
        <span>Trout</span>
      </div>
      <div className='user-icons-wrapper'>
        <img src={wishlist} />
        <img src={shoppingBag} />
        <img src={account} />
      </div>
    </nav>
  );
};

export default Navbar;
