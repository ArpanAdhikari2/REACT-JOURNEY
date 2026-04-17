import React from "react";
import ReactDOM from "react-dom/client";

// the classic way to create a element in reat
// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "hello world from react!"
// );
// console.log(heading);

//jsx way
//jsx()
const jsxHead=<h1 id="head">Arpan follow the way</h1>
const Inside=() =>(
    <h2>nested shit</h2>
);

// component composition
const Real=() => (
    <div id="jainwin">
        <h1>my is arpan</h1>
        <Inside />
    </div>
);

console.log(jsxHead);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<Real />);
