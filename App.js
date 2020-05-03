const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ])
}

// My code will go here for now
const App = () => {
    return React.createElement(
        "div", {
            id: "something-important"
        }, // Attributes for the component
        [
            React.createElement("h1", {
                key: "1"
            }, "Adotp me!"),
            React.createElement(Pet, {
                name: "Lupe",
                animal: "Dog",
                breed: "Shepard"
            }),
            React.createElement(Pet, {
                name: "Azrael",
                animal: "Cat",
                breed: "Mixed"
            }),
            React.createElement(Pet, {
                name: "Sussie",
                animal: "Dog",
                breed: "Dashund"
            })
        ] // Children of the component
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);