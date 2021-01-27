import React from "react";
import { Link } from "react-router-dom";
import TextBox from "./../CommonComponent/Fields/TextBox";
import ButtonComponrnt from "./../CommonComponent/Fields/ButtonComponrnt";
import { useStyles } from "./Style/SignInStyle";
import UseForm from "./../CommonComponent/useForm";
import ValidateInfo from "./../CommonComponent/ValidateInfo";
import {
  Grid,
  Divider,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

const AdminSignIn = () => {
    const classes = useStyles(); 
    const {HandleChange,InputValue,HandleSubmit,Errors} = UseForm(ValidateInfo);
    const SubmitData = () => {
       const userName = "admin@xyz.com";
       const password = "Admin_007";
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
                        Admin Sign In
                        </Typography>
                        <Divider className={classes.DividClass} />

                      
                        <TextBox label="Email Id"  type="text" name="email" value={InputValue.email} onChange={HandleChange}  />
                        {Errors.email && <p className={classes.errors}>{Errors.email}</p>}
                        <TextBox label="Password" type="password" name="password" value={InputValue.password} onChange={HandleChange}  />
                        {Errors.password && <p className={classes.errors}>{Errors.password}</p>}

                        <Divider className={classes.DividClass} />
                        <ButtonComponrnt type="submit" onClick={SubmitData} value="Sign In" />
                         
                    </CardContent>
                    </Card>
                </Grid>
                </form>
            </Grid>
        </div>
    )
}

export default AdminSignIn;