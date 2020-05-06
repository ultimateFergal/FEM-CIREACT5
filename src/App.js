import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

// My code will go here for now
const App = () => {
  /*   return React.createElement(
    "div",
    {
      id: "something-important",
    }, // Attributes for the component
    [
      React.createElement(
        "h1",
        {
          key: "1",
        },
        "Adotp me!"
      ),
      React.createElement(Pet, {
        name: "Lupe",
        animal: "Dog",
        breed: "Shepard",
      }),
      React.createElement(Pet, {
        name: "Azrael",
        animal: "Cat",
        breed: "Mixed",
      }),
      React.createElement(Pet, {
        name: "Sussie",
        animal: "Dog",
        breed: "Dashund",
      }),
    ] // Children of the component
  ); */

  return (
    <React.StrictMode>{/* gives warnings about things that will be deprecated or are too old in react */}
      <div>
        <h1 id="something-important">Adopt me!</h1>

        <SearchParams />

{/*         <Pet name="Lupe" animal="Dog" breed="German Shephard"></Pet>
        <Pet name="Azrael" animal="Cat" breed=">Mixed"></Pet>
        <Pet name="Sussie" animal="Dog" breed="Dashund"></Pet> */}
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
//render(React.createElement(App), document.getElementById("root"));
// ReactDOM.render(React.createElement(App), document.getElementById("root"));
