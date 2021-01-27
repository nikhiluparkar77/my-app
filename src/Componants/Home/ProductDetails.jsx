import React,{useEffect,useState} from 'react'
import {useStyles} from "./HomeStyle/ProductStyle";
import { Link } from "react-router-dom";
import ButtonComponrnt from '../CommonComponent/Fields/ButtonComponrnt';
import {
    Grid,
    Divider, 
    Typography,
    Container
  } from "@material-ui/core";
import axios from "axios";


const ProductDetails = (prop) => {
    const classes = useStyles();
    const [Details, setDetails] = useState([]);

    useEffect(()=>{
        let id = prop.match.params.Pid;
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res=>{ 
                setDetails(res.data);
                console.log(res.data)
            })).catch((err) => console.log(err))
    },[])
    return (
        <Container>
        <div className={classes.root}>
            <div className={classes.HomeClass}>
                <Grid container spacing={2}>
                    <Grid item xs={10}>   
                     
                    </Grid>
                    <Grid item xs={2}>   
                    <Link to="/" className={classes.LinkClass}><ButtonComponrnt value="Back To home" /></Link>
                    </Grid>
                </Grid>
                <br />
                <br />
                <br />
                <Grid container >
                    <Grid item xs={3}>   
                            <img src={Details.image} className={classes.DetailsImage} />
                    </Grid>
                    <Grid item xs={9}>
                        <Typography><b>Product Name:-</b><br /> {Details.title}</Typography>
                        <Divider className={classes.DividClass} />
                        <Typography><b>Product Price:-</b> Rs.{Details.price}/-</Typography>
                        <Divider className={classes.DividClass} />
                        <Typography><b>Product Category:-</b> {Details.category}</Typography>
                        <Divider className={classes.DividClass} />
                        <Typography><b>Product Description:-</b><br /> {Details.description}</Typography>
                    </Grid>
                </Grid> 
            </div>
        </div>
        </Container>
    )
}

export default ProductDetails;
