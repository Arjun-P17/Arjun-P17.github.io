import React from "react";

const Navbar = () => {
   return (
      <div className="navbar-container">
         <div
            role="button"
            onClick={() => console.log("home")}
            className="name"
            tabIndex={0}
         >
            Portfolio.
         </div>
         <div className="links-wrapper">
            <button onClick={() => console.log("work")}>Work</button>
            <button onClick={() => console.log("About")}>About</button>
            <button onClick={() => console.log("Contact")}>Contact</button>
         </div>
      </div>
   );
};

export default Navbar;
