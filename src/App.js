import profileImage from "./img/arjun-pic.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> My React App </h1>
      <h2> Author: Arjun</h2>
      <img src={profileImage} alt="Profile" />
    </div>
  );
}

export default App;
