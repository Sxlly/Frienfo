import React from "react";
import { Link } from "react-router-dom";


export class LogIn extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return <div>
            <div>Login</div>
            <div>
                <div>
                    <img />
                </div>
                <div>
                    <div>
                        <label>Username</label>
                        <input type = "text" name = "username" placeholder = "username" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type = "password" name = "password" placeholder = "password" />
                    </div>
                </div>
            </div>
            <div>
                <button type = "button" >
                    Login
                </button>
            </div>
        </div>
    }
}