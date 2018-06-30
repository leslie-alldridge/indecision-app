console.log("app.js is running");

var template = (
    <div>
        <h1>Indecision App</h1> 
        <p>this is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>Leslie Alldridge</h1>
        <p>Age: 26</p>
        <p>Location: Wellington</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);