import React from "react";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, CssBaseline, IconButton, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import Drawer from "@material-ui/core/Drawer";
import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";


//Landing page css styling
const styles = {

    root: {

        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        fontFamily: "Kumbh Sans",
    },

    navBar: {

        backgroundColor: "black",
        height: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.2rem",
        position: "sticky",
        top: 0,
        zIndex: 999,

    },

    navbarContainer: {

        display: "flex",
        justifyContent: "center",
        height: "80px",
        zIndex: 1,
        width: "100%",
        maxWidth: "1300px",
        margin: "0 auto",
        padding: "0 50px",
        
    },


}




function Landing() {

    return (
        
        <div style = {styles.root}>
            <nav style = {styles.navBar}>
                <div>
                    <a href="/" id="navbar__logo"> <i class="fas fa-users"></i>FRIENFO</a>
                    <div id="mobile-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul>
                        <li>
                            <a href = "/">Log In</a>
                        </li>
                    </ul>
                </div>
            </nav>


            <div>
                <div>
                    <div>
                        <h1>Insight Into Your Friendships</h1>
                        <h2>Want To See Into The History Of Your Friendships</h2>
                        <p>Frienfo is hear to help!</p>
                        <button>
                            <a href="/">Get Started</a>
                        </button>
                    </div>
                </div>
                <div>
                    <img src="images/pic1.svg" alt="pic" id="main__img" />
                </div>
            </div>


            <div>
                <h1>Find Out Your Friend Habits</h1>
            </div>


            <div>
                <div>
                    <div>
                        <div>
                            <h2>About Us</h2>
                            <a href="/">How It Works</a>
                            <a href="/">Testimonals</a>
                            <a href="/">Security</a>
                            <a href="/">Terms Of Service</a>
                        </div>
                        <div>
                            <h2>Contact Us</h2>
                            <a href="/">Contact</a>
                            <a href="/">Support</a>
                            <a href="/">Facebook Support</a>
                            <a href="/">Sponsorships</a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Tutorials</h2>
                            <a href="/">How To Use</a>
                            <a href="/">Frienfo Community</a>
                        </div>
                        <div>
                            <h2>Social Media</h2>
                            <a href="/">Instagram</a>
                            <a href="/">Facebook</a>
                            <a href="/">Twitter</a>
                            <a href="/">Youtube</a>
                        </div>
                        </div>
                    </div>
                </div>

        </div>
    );

}






export default Landing;