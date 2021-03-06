import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";


//importing of icons
import HomeIcon from '@material-ui/icons/Home';
import ContactsIcon from '@material-ui/icons/Contacts';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';


const styles = {

    button: {
        width: 40, 
        height: 40,
        padding: 1,
        color: "rgba(13, 16, 36, 1)",
        backgroundColor: "White",
        backgroundImage: "linear-gradient(to bottom, rgba(13, 16, 36, 1) 0%, white 100%)",
        WebkitBackgroundClip: "text",
        MozBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        MozTextFillColor: "transparent",
    },

    links: {

        textDecoration: "none",

    },

    text: {

        justifyContent: "center",
        color: "rgba(13, 16, 36, 1)",
        padding: 5,
        alignItems: "center",
        textShadow: "2px 4px 3px rgba(0,0,0,0.3)",

    }
}


export const Options = (

    <div>

        <Link to = "/Home" style = {styles.links}>
            <ListItem button>
                <ListItemIcon>
                    <HomeIcon style = {styles.button} />
                </ListItemIcon>
                <ListItemText primary="Home" style = {styles.text} />
            </ListItem>
        </Link>

        <Link to = "/FriendsList" style = {styles.links}>
            <ListItem button>
                <ListItemIcon>
                    <ContactsIcon style = {styles.button} />
                </ListItemIcon>
                <ListItemText primary="Friends List" style = {styles.text} />
            </ListItem>
        </Link>

        <Link to = "/Insights" style = {styles.links} >
            <ListItem button>
                <ListItemIcon>
                    <BubbleChartIcon style = {styles.button} />
                </ListItemIcon>
                <ListItemText primary="Insight Tools" style = {styles.text} />
            </ListItem>
        </Link>
        
        <Link to = "/Import_FL" style = {styles.links} >
            <ListItem button>
                <ListItemIcon>
                    <GroupAddIcon style = {styles.button} />
                </ListItemIcon>
                <ListItemText primary="Import Friends List" style = {styles.text} />
            </ListItem>
        </Link>

        <Link to = "/Support" style = {styles.links} >
            <ListItem button>
                <ListItemIcon>
                    <ContactSupportIcon style = {styles.button} />
                </ListItemIcon>
                <ListItemText primary="Support" style = {styles.text} />
            </ListItem>
        </Link>

    </div>
)