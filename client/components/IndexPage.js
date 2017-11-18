import React from "react";
import {Link} from "react-router-dom";

export default class IndexPage extends React.Component {
    constructor(state, props) {
        super(state, props);
    }

    render() {
        return <div className="jumbotron">
            <h1>Marketing stuff!</h1>
            <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.</p>
            <p><Link className="btn btn-lg btn-success" to={"/"} role="button">Get started today</Link></p>
        </div>
    }
}