import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "axios";
import Moment from 'react-moment';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

 
 

export default function UserInfo() {
  const classes = useStyles();
  const [UserData,SetUserData] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((res)=>{        
        SetUserData(res.data.results)
    }).catch((err) =>  console.log(err))
  }, [])
console.log(UserData);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">DOB</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
     
           {UserData.map((item,index) => (
            <TableRow key={index}>
              <TableCell >
              {item.name.title}:  {item.name.first} {item.name.last}
              </TableCell>
              <TableCell align="right"> {item.location.street.number}, {item.location.city}, {item.location.country}, {item.location.state}, {item.location.postcode}</TableCell>
              <TableCell align="right"><img src={item.picture.thumbnail} /> </TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right"><Moment format="YYYY/MM/DD">{item.dob.date}</Moment></TableCell>
            </TableRow>
           )) }
        
        </TableBody>
      </Table>
    </TableContainer>
  );
}
