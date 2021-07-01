import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import DateTime from "./components/DateTime/DateTime";
import WeatherWidget from "./components/WeatherWidget/WeatherWidget";
import SilverHandwriting from "./assets/cursors/silver-2/SilverHandwriting.cur";
import SilverCursor from "./assets/cursors/silver-2/SilverNormalSelect.cur";
import WorkinginBackground from "./assets/cursors/silver-2/WorkinginBackground.cur";
import SilverLinkSelect from "./assets/cursors/silver-2/SilverLinkSelect.cur";
import SilverUnavailable from "./assets/cursors/silver-2/SilverUnavailable.cur";
import SilverHelpSelect from "./assets/cursors/silver-2/SilverHelpSelect.cur";

function App() {
  return (
    <div className="App" style={{ cursor: `url(${SilverHandwriting}),auto` }}>
      <div className="wrapper">
        <Searchbar />
        <div className="container">
          <div className="item">
            <DateTime />
          </div>
          <div
            className="item"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <WeatherWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
