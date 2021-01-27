import React,{useEffect,useState} from 'react'
import { useStyles } from "./HomeStyle/Style";
import { Container } from "@material-ui/core";
import UserInfo from '../Admin/UserInfo';
import ProductComponent from './Product';

const HomeComponent = () => {
  const classes = useStyles(); 
  const [Data,SetData] =  useState([]);

  useEffect(()=>{
    let NewData = JSON.parse(localStorage.SubmitData); 
      SetData(NewData) 
  },[]);
 

    return (
        <div className={classes.root}>
          <div className={classes.HomeClass}>
              <Container> 
                  {Data.email == "admin@xyz.com" ? <UserInfo /> : <ProductComponent /> }
                
              </Container>
          </div>
      </div>
    )
}

export default HomeComponent;