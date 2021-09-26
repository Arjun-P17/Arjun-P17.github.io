import { useState } from "react";
import profileImage from "../img/arjun-pic.jpg";
import "./Home.scss";

function Home() {
  const [name, setName] = useState("Arjun");

  return (
    <div className="main">
      <h1> My Website </h1>
      <h2> Author: {name}</h2>
      <img src={profileImage} alt="Profile" />\
      <div>
        <button
          onClick={() => setName(name == "Arjun" ? "Pushpavannan" : "Arjun")}
        >
          Click Me
        </button>
      </div>
    </div>
  );
}

export default Home;
