import React,{useEffect,useState} from "react";
import { Link,useHistory } from "react-router-dom";
import TextBox from "../CommonComponent/Fields/TextBox";
import ButtonComponrnt from "../CommonComponent/Fields/ButtonComponrnt";
import { useStyles } from "./Style/SignInStyle";
import UseForm from "../CommonComponent/useForm";
import ValidateInfo from "../CommonComponent/ValidateInfo";
import {
  Grid,
  Divider,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";



const UserSignIn = () => {
  
    const classes = useStyles();
    const history = useHistory();
    const {HandleChange,InputValue,HandleSubmit,Errors} = UseForm(ValidateInfo);
    const SubmitData = () => {
       const userName = "user@demo.com";
       const password = "12345678";
       if(InputValue.email === userName && InputValue.password === password){
        window.location = "/";
        localStorage.setItem("SubmitData",JSON.stringify(InputValue));
       }
    }
   
 
     return (
        <div className="CoomanStyle" className={classes.root}>
            <Grid container spacing={12} className={classes.CoomanStyle}>
                <form noValidate autoComplete="off" onSubmit={HandleSubmit} className={classes.formClass}>
                <Grid item lg={12}>
                    <Card className={classes.CardClass}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h5">
                        Sign In
                        </Typography>
                        <Divider className={classes.DividClass} />

                        <TextBox label="Email Id"  type="text" name="email" value={InputValue.email} onChange={HandleChange}  />
                        {Errors.email && <p className={classes.errors}>{Errors.email}</p>}
                        <TextBox label="Password" type="password" name="password" value={InputValue.password} onChange={HandleChange}  />
                        {Errors.password && <p className={classes.errors}>{Errors.password}</p>}
                     

                        <Divider className={classes.DividClass} />
                        <ButtonComponrnt type="submit" value="Sign In" onClick={SubmitData} />
                         
                    </CardContent>
                    </Card>
                </Grid>
                </form>
            </Grid>
        </div>
    )
}

export default UserSignIn;