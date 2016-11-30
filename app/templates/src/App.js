import React from "react";
import ReactDOM from "react-dom";

export default class App{
    constructor(){
        let cont = document.getElementById("app");
        ReactDOM.render(<div>hello</div>, cont);
    }
}

let app = new App();