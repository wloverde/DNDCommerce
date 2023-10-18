import './Navbar.css';
import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import twistedTrout from '../../assets/images/twisted-trout.svg';
import search from '../../assets/images/magnifying-glass.svg';
import orderHistory from '../../assets/images/orderHistory.png';
import shoppingBag from '../../assets/images/shopping-bag.png';
import account from '../../assets/images/account.png';
import logout from '../../assets/images/logout.png';
import SearchForm from '../SearchForm/SearchForm';
import Auth from '../../../utils/auth';
import Category from '../../components/Category/Category';   

const Navbar = ({ currentUser }) => {
  const [displaySearch, setDisplaySearch] = useState(false);
  
  function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 500);
    console.log('page to reload')
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
        {Auth.loggedIn() ? (
          <p style={{ paddingLeft: '5px' }}>Welcome, {currentUser.username}</p>
        ) : (
          <></>
        )}
      </div>
      {/* container for the icons on the navbar, they all link to their respective routes in the app jsx component */}
      <div className='image-wrapper'>
        <span>Twisted</span>
        <Link to={'/'} onClick={refreshPage}>
          <img className='mask mask-circle bg-white ' src={twistedTrout} />
        </Link>
        <span>Trout</span>
      </div>
      <div className='menu menu-horizontal icons-wrapper'>
        <Link to={'/orderHistory'} className='tooltip' data-tip='Order History'>
          <img className='h-8 w-8 icons' src={orderHistory} />
        </Link>
        <Link to={'/checkout'} className='tooltip' data-tip='Cart'>
          <img className='h-8 w-8 icons' src={shoppingBag} />
        </Link>
        <Link to={'/profile'} className='tooltip' data-tip='Profile'>
          <img className='h-8 w-8 icons' src={account} />
        </Link>
        {/* conditionally renders the logout button based on the state passed in from the app jsx component */}
        {Auth.loggedIn() ? (
          <div className='tooltip' data-tip='Logout'> 
            <img className='h-8 w-8 icons' src={logout} onClick={() => Auth.logout()} />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className='line-break' />
      <div className='category-list'>
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
