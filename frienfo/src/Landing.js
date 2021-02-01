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


}




function Landing() {

    return (
        
        <div>
            <nav>
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

                    </div>
                </div>
            </div>
        
        </div>
    );

}






export default Landing;