import React from "react";
import { Link } from "react-router-dom";


function Register() {

    return (
        <div>
            <div>Register</div>
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
                        <label>Email</label>
                        <input type = "email" name = "email" placeholder = "email" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type = "password" name = "password" placeholder = "password" />
                    </div>
                </div>
            </div>
            <div>
                <button type = "button" >
                    Register
                </button>
            </div>
        </div>
    );
    
}

export default Register;