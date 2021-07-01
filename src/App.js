import "./App.css";
import textCursor from "./assets/cursors/Cyan_Text.cur";
import helpCursor from "./assets/cursors/Cyan_Help.cur";
import linkCursor from "./assets/cursors/Cyan_Link.cur";
import precisionCursor from "./assets/cursors/Cyan_Precision.cur";
import unavailableCursor from "./assets/cursors/Cyan_Unavailable.cur";
import vertResizeCursor from "./assets/cursors/Cyan_Vertical_Resize.cur";
import horResizeCursor from "./assets/cursors/Cyan_Horizontal_Resize.cur";
import diagResizeCursor1 from "./assets/cursors/Cyan_Diagonal_Resize_1.cur";
import diagResizeCursor2 from "./assets/cursors/Cyan_Diagonal_Resize_2.cur";
import cursor from "./assets/cursors/Cyan_Normal.cur";
import Searchbar from "./components/Searchbar/Searchbar";
import DateTime from "./components/DateTime/DateTime";
import WeatherWidget from "./components/WeatherWidget/WeatherWidget";

function App() {
  return (
    <div className="App" style={{ cursor: `url(${cursor}),auto` }}>
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
