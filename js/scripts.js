// require("./module1.js");
// require("./module2.js");

import React from "react";
import ReactDom from "react-dom";

class Layout extends React.Component {
    render() {
        return (
            <h3>We will we will rock you ! We will we will rock you</h3>
        )
    }
}

const app = document.getElementById('app');

ReactDom.render(<Layout/>, app);
