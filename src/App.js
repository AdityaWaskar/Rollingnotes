import "./App.css";
import {
  MovableBackground,
  Component2,
  Component3,
  Component4,
} from "./components";

function App() {
  return (
    <div className="App">
      <MovableBackground />
      <Component2 />
      <Component3 />
      <div data-aos="slide-right" data-aos-once="true">
        <hr />
      </div>
      <Component4 />
      <div data-aos="slide-right" data-aos-once="true" data-aos-offset="0">
        <hr />
      </div>
      {/* <MovableBackground /> */}
    </div>
  );
}

export default App;
