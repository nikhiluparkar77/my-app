import { makeStyles } from "@material-ui/core/styles";
import { Block } from "@material-ui/icons";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
      width: "100%",
    },
  },
  HomeClass: { 
    position: "relative",
    padding: "2% 0%", 
  },
  CardClass: {
    width: "310px",
    border: "1px solid #eee",
  },
  DividClass: {
    margin: "15px 0px",
  },
  Productimage:{
      width:"180px",
      height:"180px",
      margin:"auto",
      display:"block"
  },
  DetailsImage:{
    width:'80%'
  },
  LinkClass: {
    textDecoration: "none",
    color: "#3f51b5",
    display: "inline-block",
  },
}));
