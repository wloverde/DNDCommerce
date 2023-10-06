import { useState } from "react";
import "./App.css";
import twistedTrout from "./assets/images/twisted-trout.svg";
import search from "./assets/images/magnifying-glass.svg";

function App() {
  const [displaySearch, setDisplaySearch] = useState(false);

  return (
    <>
      <nav className='content-flex'>
        <div className='search-wrapper'>
          <img
            src={search}
            onClick={() =>
              displaySearch ? setDisplaySearch(false) : setDisplaySearch(true)
            }
          />
        </div>
        <div className='image-wrapper'>
          <span>Twisted</span>
          <img src={twistedTrout} />
          <span>Trout</span>
        </div>
        <div className='user-icons-wrapper'>
          <img src='wishlist' />
          <img src='shopping-bag' />
          <img src='account' />
        </div>
      </nav>
    </>
  );
}

export default App;
