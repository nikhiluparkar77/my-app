import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
      width: "100%",
    },
  },  
  CoomanStyle: {
    margin: "5% 0%",
  },

  formClass: {
    margin: "30px auto",
    display: "block", 
     
  },
  CardClass: {
    width: "500px",
    border: "1px solid #eee",
  },
  DividClass: {
    margin: "15px 0px",
  },
  TextClasses: {
    width: "100%",
    margin: "10px 0",
  },
  LinkClass: {
    textDecoration: "none",
    color: "#3f51b5",
    display: "inline-block",
  },
  classRight: {
    float: "right",
  },
  errors:{
    color:"red",
    fontSize:"12px",
    margin:'0px'
  }
}));
