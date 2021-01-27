import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom"; 
import { useStyles } from "./Style/HeaderStyle";
import {
  Container,
  Avatar,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";

const HeaderComponent = () => {
    const classes = useStyles();
    const history = useHistory();
    const [User, SetUser] = useState([])
    
    useEffect(()=>{
      if(localStorage.SubmitData){
        const userData = localStorage.getItem('SubmitData')
        const NewUserEmail = JSON.parse(userData);
         
        SetUser(NewUserEmail.email);
      }
    },[])
     
    const LogutUser = () =>{
      
        localStorage.clear();
        window.location = "/sign-in"
       
        
    }


    let userLink = (
    <>
        <Link className={classes.LinkClass} to="/sign-in">
                <Button color="inherit">User</Button>
              </Link>
              <Link className={classes.LinkClass} to="/admin/sign-in">
                <Button color="inherit">Admin</Button>
              </Link>
      </>
   
    ) 

    let logoutLink = (
      <Link className={classes.LinkClass} to="">
                <Button color="inherit" onClick={LogutUser}>Logout</Button>
              </Link>
    )

      useEffect(()=>{
        if(User.length === 0){
          history.push("/sign-in");
        }else{
          history.push("/");
        }
      })

    return (
        <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Container>
            <Toolbar>
              {" "}
              <Typography variant="h6" className={classes.title}>
                <Link className={classes.LinkClass} to="/">
                  Test App
                </Link>
              </Typography>
             {User.length === 0 ? userLink : logoutLink }
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </div>
    )
}

export default HeaderComponent;