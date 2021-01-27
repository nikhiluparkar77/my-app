import React from 'react';
import { useStyles } from "./Style/FooterStyle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


const FooterComponent = () => {
    const classes = useStyles();
  let date = new Date();
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                    @ Copyright {date.getFullYear()} All Rights Reserved.
                    </Typography>
                </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}

export default FooterComponent;