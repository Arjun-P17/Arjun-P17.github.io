import { useState } from "react";
import profileImage from "../img/arjun-pic.jpg";
import Navbar from "../components/Navbar/Navbar";
import "./Home.scss";

function Home() {
   const [name, setName] = useState("Arjun");

   return (
      <div className="main">
         <Navbar />
         <div className="header">
            <h1 className="title"> Arjun Pushpavannan</h1>
         </div>
         <div className="content">
            <img src={profileImage} alt="Profile" />\<div></div>
         </div>
      </div>
   );
}

export default Home;
