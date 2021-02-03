import React from "react";
import { Link } from "react-router-dom";


const styles = {

    baseContainer: {

        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    header: {

        fontSize: "24px",
    
    },

    content: {

        display: "flex",
        flexDirection: "column",
    },

    imageContainer: {

        width: "21em",
        
    },

    image: {

        width: "100%",
        height: "100%",
    },

    form: {

        marginTop: "2em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },


}


function LogIn() {

    return (

        <div style = {styles.baseContainer}>
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
    );
}

export default LogIn;