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

//import of icons
import ListIcon from '@material-ui/icons/List';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleOutlinesIcon from "@material-ui/icons/AccountCircleOutlined";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

//import of dev made js files
import { Options } from "./options";

const drawerWidth = 240;

const icon_styles = {

    button: {

        width: 45,
        height: 45,
        color: "#ffffff",
        padding: 1,
    }
}

const icon_styles_left = {

    button: {
        width: 45,
        height: 45,
        color: "#37474f",
    }
}

const useStyles = makeStyles((theme) => ({

    root: {

        display: "flex",
    },

    toolbar: {

        paddingRight: 45,
        color: "rgba(13, 16, 36, 1)",

    },

    toolbarIcon: {

        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        width: 40,
        height: 40,
        ...theme.mixins.toolbar,
    },

    appBar: {

        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },

    appBarShift: {

        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    menuButton: {

        marginRight: 36,
        width: 40,
        height: 40,
    },

    menuButtonHidden: {

        display: "none",
    },

    title: {

        flexGrow: 1,
        width: 45,
        height: 45,
    },

    logo: {

        margin: "auto",
        textAlign: "center",
        maxWidth: "215px",
        padding: 2,
        backgroundColor: "white",
        backgroundImage: "linear-gradient(to bottom, white 0%, white 50%, blue 100%)",
        WebkitBackgroundClip: "text",
        MozBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        MozTextFillColor: "transparent",
    },

    drawerPaper: {

        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    drawerPaperClose: {

        overflowX: "hidden", 
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),

        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },

    appBarSpacer: theme.mixins.toolbar,
    content: {

        flexGrow: 1,
        height: "100vh",
        overflow: "auto",

    },

    container: {

        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },

    footerContainer: {

        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        display: "flex",
    },

    paper: {

        padding: theme.spacing(1),
        display: "flex",
        overflow: "auto",
        flexDirection: "column",
    },

    fixedHeight: {

        height: 280,
    },

    links: {

        textDecoration: "none",
    }


}));


function Support() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const [value, setValue] = React.useState(0);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} style = {{ backgroundColor: "rgba(13, 16, 36, 1)", color: "White"}}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <ListIcon style={icon_styles.button} />
                    </IconButton>
                    <h1 className={classes.logo}>FRIENFO</h1>
                    <AccountCircleOutlinesIcon style={icon_styles.button}>
                        <Badge badgeContent={5} />
                    </AccountCircleOutlinesIcon>
                    <Link to = "/Landing" className={classes.links}>
                        <ExitToAppIcon style={icon_styles.button}>
                            <Badge badgeContent={6} />
                        </ExitToAppIcon>
                    </Link>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes = {{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),

                }}

                open = {open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton edge="start" aria-label="menuleft" className={classes.margin} onClick = {handleDrawerClose} >
                        <ChevronLeftIcon fontSize = "large" />
                    </IconButton>
                

                </div>
                <List style={{ backgroundColor: "#ffffff"}}>
                    {Options}
                </List>
            </Drawer>

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                    </Grid>

                    Support
                </Container>
            </main>
        </div>
    );

}



export default Support;