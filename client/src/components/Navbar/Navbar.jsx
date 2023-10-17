import './Navbar.css';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../../utils/queries';
import { Link } from 'react-router-dom';
import twistedTrout from '../../assets/images/twisted-trout.svg';
import search from '../../assets/images/magnifying-glass.svg';
import orderHistory from '../../assets/images/orderHistory.png';
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
    <header className="flex-row px-1">
      <h1>
        <Link to="/">Twisted Trout</Link>
      </h1>

      <div className="image-wrapper">
        <Link to={"/"}>
          <img className="mask mask-circle bg-white " src={twistedTrout} />
        </Link>
      </div>
      <div className='menu menu-horizontal icons-wrapper'>
        <Link to={'/orderHistory'} className='tooltip' data-tip='Order History'>
          <img className='h-8 w-8 icons' src={orderHistory} />
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
    </header>
  );
}

export default Navbar;
