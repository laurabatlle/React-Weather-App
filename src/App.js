import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <footer>
        This project is created by Laura Batlle and it is
        <a
          href="https://github.com/laurabatlle/React-Weather-App"
          target="_blank"
        >
          open-sourced in Github
        </a>
      </footer>
    </div>
  );
}

export default App;
