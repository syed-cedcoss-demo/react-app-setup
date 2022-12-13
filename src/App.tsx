import logo from "../src/assets/icons/logo.svg";
import "./App.css";

function App() {
  console.log("ENV", process.env.REACT_APP_ENV);
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        height={400}
        width={400}
      />
    </div>
  );
}

export default App;
