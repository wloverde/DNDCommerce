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

  const clickTest = (event) => {
    // test function that we can reassign as a query depending on option clicked.
    console.log(`click ${event.target.innerHTML}`);
  };

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
      <div className='line-break' />
      <div className='category-list'>
        <ul className='categories'>
          <li onClick={clickTest}>Melee</li>
          <li onClick={clickTest}>Magic</li>
          <li onClick={clickTest}>Ranged</li>
          <li onClick={clickTest}>Armor</li>
          <li onClick={clickTest}>Consumables</li>
        </ul>
      </div>
      <div className='flavor-text'>
        <p>
          ✨Trout has the sale if you have the scales. We always roll nat
          20&#39;s so delivery is instant using Teleportation!✨
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
