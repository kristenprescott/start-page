import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import DateTime from "./components/DateTime/DateTime";
import WeatherWidget from "./components/WeatherWidget/WeatherWidget";
import SilverCursor from "./assets/cursors/silver-2/SilverNormalSelect.cur";
import WorkinginBackground from "./assets/cursors/silver-2/WorkinginBackground.cur";
import SilverHandwriting from "./assets/cursors/silver-2/SilverHandwriting.cur";
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
            {/* <WeatherWidget /> */}
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

      {/* <div className="grid-wrapper">
        <section className="grid">
          <div className="items item-1">First</div>
          <div className="items item-2">Second</div>
          <div className="items item-3">Third</div>
          <div className="items item-4">Fourth</div>
          <div className="items item-5">Fifth</div>
          <div className="items item-6">Sixth</div>
          <div className="items item-7">Seventh</div>
          <div className="items item-8">Eighth</div>
          <div className="items item-9">Ninth</div>
        </section>
      </div> */}
    </div>
  );
}

export default App;
