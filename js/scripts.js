// require("./module1.js");
// require("./module2.js");

import React from "react";
import ReactDom from "react-dom";

class Layout extends React.Component {
    render() {
        return (
            <div>Hi! I am here.</div>
        )
    }
}

const app = document.getElementById('app');

ReactDom.render(<Layout/>, app);
