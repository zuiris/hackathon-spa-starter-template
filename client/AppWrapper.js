import React, {Component} from "react";
import Navbar from "./components/Navbar";

export default class AppWrapper extends Component {
    render() {
        return <div className="app-wrapper">
            <Navbar/>
            {this.props.children}
        </div>;
    }
}
