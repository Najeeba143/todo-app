import React, {Component} from "react";
import {Link} from "react-router-dom";


export default class LandingPage extends Component {
    
    render() {
        return (
            <div>
                <Link to={"/register"}>
                    <button  >
                        Register
                    </button>
                </Link>
            </div>
        )
    }
}