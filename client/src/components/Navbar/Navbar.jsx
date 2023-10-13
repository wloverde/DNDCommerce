import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import twistedTrout from '../../assets/images/twisted-trout.svg';
import search from '../../assets/images/magnifying-glass.svg';
import favorites from '../../assets/images/heart.png';
import shoppingBag from '../../assets/images/shopping-bag.png';
import account from '../../assets/images/account.png';
import SearchForm from '../SearchForm/SearchForm';

const Navbar = ({ setSelectedCategory }) => {
  const [displaySearch, setDisplaySearch] = useState(false);

  const categoryClick = (event) => {
    const category = event.target.innerHTML;
    setSelectedCategory(category); // Call the callback function
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
        <Link to={'/'}>
          <img className='mask mask-circle bg-white ' src={twistedTrout} />
        </Link>
        <span>Trout</span>
      </div>
      <div className='menu menu-horizontal'>
        <Link to={'/favorites'}>
          <img className='h-8 w-8 icons' src={favorites} />
        </Link>
        <Link to={'/checkout'}>
          <img className='h-8 w-8 icons' src={shoppingBag} />
        </Link>
        <Link to={'/login'}>
          <img className='h-8 w-8 icons' src={account} />
        </Link>
      </div>
      <div className='line-break' />
      <div className='category-list'>
        <ul className='categories'>
          {/* render the cagetories with a fetch request */}
          <li onClick={categoryClick}>Melee</li>
          <li onClick={categoryClick}>Magic</li>
          <li onClick={categoryClick}>Ranged</li>
          <li onClick={categoryClick}>Armor</li>
          <li onClick={categoryClick}>Consumables</li>
        </ul>
      </div>
      <div className='text-center'>
        <p className='text-3xl font-bold'>
          ✨Trout has the sale if you have the scales. We always roll nat
          20&#39;s so delivery is instant using Teleportation!✨
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
