import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import dragon from "./assets/images/homepage-dragon.jpg";

function App() {
  return (
    <div className='continer-responsive'>
      <Navbar />
      {/* image test, can be resized, replaced, etc. */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={dragon}
          style={{ borderRadius: "12px", boxShadow: "0 0 8px" }}
        />
      </div>
    </div>
  );
}

export default App;
