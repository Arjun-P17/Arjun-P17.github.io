import React from "react";
import "./navbar.scss";

const Navbar = () => {
   return (
      <div className="section">
         <div className="container">
            <div className="navbar-wrapper">
               <div
                  role="button"
                  onClick={() => console.log("#home")}
                  className="name"
                  tabIndex={0}
               >
                  Portfolio.
               </div>
               <div className="links-wrapper">
                  <button onClick={() => console.log("#work")}>Work</button>
                  <button onClick={() => console.log("#about")}>About</button>
                  <button onClick={() => console.log("#contact")}>
                     Contact
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
