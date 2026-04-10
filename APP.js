const heading = React.createElement(
    "h1",
    {id:"heading"},
    "hello world from react!"
);
const parent= React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        [React.createElement("h1",{},"IM THE REAL ONE "),
        React.createElement("h1",{},"IM THE REAL ONE ")]
    )
)
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
