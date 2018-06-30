"use strict";

console.log("app.js is running");

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "this is some info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Leslie Alldridge"
    ),
    React.createElement(
        "p",
        null,
        "Age: 26"
    ),
    React.createElement(
        "p",
        null,
        "Location: Wellington"
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
