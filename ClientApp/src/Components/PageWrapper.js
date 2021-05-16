import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText, Paper, Button } from '@material-ui/core'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment'
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { change_theme } from '../Actions/index';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    paper: {
        marginTop: 60,
        position: "sticky",
        zIndex: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
}));

export function PageWrapper(props) {
    const classes = useStyles();
    const theme = useTheme();
    const theme_type = useSelector(state => state.theme);
    const history = useHistory();
    const [open, setOpen] = React.useState(true);
    const dispatch = useDispatch();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const getThemeIcon = () => {
        if (theme_type == 'dark')
            return <Brightness7Icon />
        else
            return <Brightness4Icon style={{ color: '#FFF' }}/>
    }

    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Application Demo
                    </Typography>
                    <IconButton onClick={() => dispatch(change_theme(theme_type == 'light' ? 'dark' : 'light'))}>{getThemeIcon()}</IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button key={"ModelingButton"} onClick={() => history.push("/modeling")}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary={"Modeling Cockpit"} />
                    </ListItem>
                    <ListItem button key={"ForecastButton"} onClick={() => history.push("/")}>
                        <ListItemIcon><AssignmentIcon /></ListItemIcon>
                        <ListItemText primary={"Account Forecast"} />
                    </ListItem>
                    <ListItem button key={"ScenarioButton"} onClick={() => history.push("/")}>
                        <ListItemIcon><InfoIcon /></ListItemIcon>
                        <ListItemText primary={"Scenario Management"} />
                    </ListItem>
                    <ListItem button key={"EntityButton"} onClick={() => history.push("/")}>
                        <ListItemIcon><InfoIcon /></ListItemIcon>
                        <ListItemText primary={"Entity Mangement"} />
                    </ListItem>
                    <ListItem button key={"TimeButton"} onClick={() => history.push("/")}>
                        <ListItemIcon><InfoIcon /></ListItemIcon>
                        <ListItemText primary={"Time Management"} />
                    </ListItem>
                    <ListItem button key={"M&AButton"} onClick={() => history.push("/")}>
                        <ListItemIcon><InfoIcon /></ListItemIcon>
                        <ListItemText primary={"M&A"} />
                    </ListItem>
                    <ListItem button key={"AccountButton"} onClick={() => history.push("/")}>
                        <ListItemIcon><InfoIcon /></ListItemIcon>
                        <ListItemText primary={"Account Management"} />
                    </ListItem>
                    <ListItem button key={"ImportExportButton"} onClick={() => history.push("/")}>
                        <ListItemIcon><InfoIcon /></ListItemIcon>
                        <ListItemText primary={"Import / Export Data"} />
                    </ListItem>
                    <ListItem button key={"CurrencyButton"} onClick={() => history.push("/")}>
                        <ListItemIcon><InfoIcon /></ListItemIcon>
                        <ListItemText primary={"Currency"} />
                    </ListItem>
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <Paper className={classes.paper} square elevation={1}>
                    {props.children}
                </Paper>
            </main>
        </div>
    );
}