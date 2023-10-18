import './Navbar.css';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../../utils/queries';
import { Link } from 'react-router-dom';
import twistedTrout from '../../assets/images/twisted-trout.svg';
import search from '../../assets/images/magnifying-glass.svg';
import favorites from '../../assets/images/heart.png';
import shoppingBag from '../../assets/images/shopping-bag.png';
import account from '../../assets/images/account.png';
import logout from '../../assets/images/logout.png';
import SearchForm from '../SearchForm/SearchForm';
import Auth from '../../../utils/auth';

const Navbar = ({ setSelectedCategory, isLoggedIn, currentUser }) => {
  const [displaySearch, setDisplaySearch] = useState(false);

  const {
    loading: loadingCategories,
    error: errorCategories,
    data: dataCategories,
  } = useQuery(QUERY_CATEGORIES);

  const categoryClick = (category) => {
    const categoryId = category._id;
    setSelectedCategory(categoryId); // Call the callback function
  };

  if (loadingCategories) {
    return <span className='loading loading-dots loading-lg'></span>;
  }

  return (
    <nav className='content-flex header'>
      {/* wraps the search icon, then when clicked renders the search bar conditionally */}
      <div className='search-wrapper'>
        <img
          src={search}
          onClick={() =>
            displaySearch ? setDisplaySearch(false) : setDisplaySearch(true)
          }
        />
        {displaySearch ? <SearchForm /> : <></>}
        {isLoggedIn ? (
          <p style={{ paddingLeft: '5px' }}>Welcome, {currentUser.username}</p>
        ) : (
          <></>
        )}
      </div>
      {/* container for the icons on the navbar, they all link to their respective routes in the app jsx component */}
      <div className='image-wrapper'>
        <span>Twisted</span>
        <Link to={'/'}>
          <img className='mask mask-circle bg-white ' src={twistedTrout} />
        </Link>
        <span>Trout</span>
      </div>
      <div className='menu menu-horizontal icons-wrapper'>
        <Link to={'/favorites'} className='tooltip' data-tip='Favorites'>
          <img className='h-8 w-8 icons' src={favorites} />
        </Link>
        <Link to={'/checkout'} className='tooltip' data-tip='Cart'>
          <img className='h-8 w-8 icons' src={shoppingBag} />
        </Link>
        <Link to={'/profile'} className='tooltip' data-tip='Profile'>
          <img className='h-8 w-8 icons' src={account} />
        </Link>
        {/* conditionally renders the logout button based on the state passed in from the app jsx component */}
        {isLoggedIn ? (
          <div className='tooltip' data-tip='Logout'>
            <img className='h-8 w-8 icons' src={logout} onClick={Auth.logout} />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className='line-break' />
      <div className='category-list'>
        <ul className='categories tabs'>
          {/* render the cagetories with a query */}
          {dataCategories.categories.map((category) => (
            <li className='tab tab-lifted text-xl text-white' key={category._id} onClick={() => categoryClick(category)}>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div className='text-center slogan-text'>
        <p className='text-3xl font-bold'>
          ✨Trout has the sale if you have the scales. We always roll nat
          20&#39;s so delivery is instant using Teleportation!✨
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
