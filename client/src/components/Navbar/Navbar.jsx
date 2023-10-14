import './Navbar.css';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../../utils/queries';
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

const Navbar = ({
  setSelectedCategory,
  isLoggedIn,
  currentUser,
  selectedCategory,
}) => {
  const [displaySearch, setDisplaySearch] = useState(false);

  // const {
  //   loading: loadingProducts,
  //   error: errorProducts,
  //   data: dataProducts,
  // } = useQuery(QUERY_PRODUCTS, {
  //   variables: { category: selectedCategory },
  // });

  // console.log(dataProducts);

  const {
    loading: loadingCategories,
    error: errorCategories,
    data: dataCategories,
  } = useQuery(QUERY_CATEGORIES);
  console.log(dataCategories);

  const categoryClick = (category) => {
    const categoryId = category._id;
    setSelectedCategory(categoryId); // Call the callback function
  };

  if (loadingCategories) {
    return <span className='loading loading-dots loading-lg'></span>;
  }

  return (
    <nav className='content-flex header'>
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
      <div className='image-wrapper'>
        <span>Twisted</span>
        <Link to={'/'}>
          <img className='mask mask-circle bg-white ' src={twistedTrout} />
        </Link>
        <span>Trout</span>
      </div>
      <div className='menu menu-horizontal icons-wrapper'>
        <Link to={'/favorites'}>
          <img
            className='h-8 w-8 icons transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'
            data-te-toggle='tooltip'
            title='Favorites'
            src={favorites}
          />
        </Link>
        <Link to={'/checkout'}>
          <img
            className='h-8 w-8 icons transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'
            data-te-toggle='tooltip'
            title='Cart'
            src={shoppingBag}
          />
        </Link>
        <Link to={'/profile'}>
          <img
            className='h-8 w-8 icons transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'
            data-te-toggle='tooltip'
            title='Profile'
            src={account}
          />
        </Link>
        {isLoggedIn ? (
          <img
            className='h-8 w-8 icons transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'
            data-te-toggle='tooltip'
            title='Logout'
            src={logout}
            onClick={Auth.logout}
          />
        ) : (
          <></>
        )}
      </div>
      <div className='line-break' />
      <div className='category-list'>
        <ul className='categories'>
          {/* render the cagetories with a query */}
          {dataCategories.categories.map((category) => (
            <li key={category._id} onClick={() => categoryClick(category)}>
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
