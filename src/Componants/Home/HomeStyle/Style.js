import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      // margin: theme.spacing(0),
      width: "100%",
    },
  },
  HomeClass: {  
    backgroundSize: "cover",
    backgroundPosition: "center", 
    paddingTop: "4%", 
  },
}));
