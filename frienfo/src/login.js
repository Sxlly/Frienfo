import React from "react";
import { Link } from "react-router-dom";
import LoginImg from "./LoginImg.svg";


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

    formGroup: {

        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "fit-content",
    },

    label: {

        fontSize: "20px",
    },

    input: {

        marginTop: "6px",
        minWidth: "18em",
        height: "37px",
        padding: "0px 10px",
        fontSize: "16px",
        backgroundColor: "gray",
        border: "0",
        borderRadius: "4px",
        marginBottom: "31px",
        transition: "all 250ms ease-in-out",

    },

    footer: {

        marginTop: "3em",
    },

}


function LogIn() {

    return (

        <div style = {styles.baseContainer}>
            <div style = {styles.header}>Login</div>
            <div style = {styles.content}>
                <div style = {styles.imageContainer}>
                    <img src = {LoginImg} style = {styles.image} />
                </div>
                <div style = {styles.form}>
                    <div style = {styles.formGroup}>
                        <label style = {styles.label}>Username</label>
                        <input  style = {styles.input} type = "text" name = "username" placeholder = "username" />
                    </div>
                    <div style = {styles.formGroup}>
                        <label style = {styles.label}>Password</label>
                        <input style = {styles.input} type = "password" name = "password" placeholder = "password" />
                    </div>
                </div>
            </div>
            <div style = {styles.footer}>
                <button type = "button" >
                    Login
                </button>
            </div>
        </div>
    );
}

export default LogIn;