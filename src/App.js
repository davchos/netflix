// import logo from "./logo.svg";
import "./App.css";
import sections from "./images.json";
import Section from "./Section";

import logo from "./netflix_official_logo_icon_168085.png";

const App = () => {
  return (
    <div className="App">
      <img className="App-img" src={logo} alt="" />

      <div className="sections-div">
        <ul>
          {sections.map((section, index) => {
            return (
              <li key={index}>
                <Section category={section.category} images={section.images} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
