import React,{useState,useEffect} from 'react'; 
import {useStyles} from "./HomeStyle/ProductStyle";
import { Link } from "react-router-dom";
import {
    Grid,
    Divider,
    Card,
    CardContent,
    Typography,
  } from "@material-ui/core";
import axios from "axios";
import ButtonComponrnt from '../CommonComponent/Fields/ButtonComponrnt';
import CartComponent from "./CartComponent";
 
  
  

const ProductComponent = () => {
    
    const classes = useStyles();
    const [ProductData,SetProductData] = useState([]);
    const [ProductList,SetProductList] = useState([]);
    const [Cart,SetCart] = useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
            .then((res) => { 
                SetProductData(res.data);
                SetProductList(res.data);
            }).catch((err)=> console.log(err));
    },[])

  const HandleChange = (e) => {
    let value = e.target.value;
    let product = ProductData;
    if(e.target.checked === true){
       let UpdatedProduct =  product.filter(item => item.category === value);
       SetProductData(UpdatedProduct);
    }else{
        SetProductData(ProductList);
    }
  }

  const HnadleCart = (item) => { 
    SetCart([...Cart,item]);     
  }

  const RemoveCart = (id) => {
        console.log(id);
        let RemoveItem = Cart;
        let GetRemoveItem = RemoveItem.splice(1,id);
        SetCart(GetRemoveItem);
  }

      return (
          <div className={classes.root}>
            <div className={classes.HomeClass}>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={2}>                
                        <Typography>Category</Typography> 
                            <div>
                            <input type="checkbox" name="category" onChange={HandleChange} value="men clothing" /> <label>Men clothing</label>
                            </div>
                            <div>
                            <input type="checkbox" name="category" onChange={HandleChange} value="jewelery" /> <label>Jewelery</label>
                            </div>
                            <div>
                            <input type="checkbox" name="category" onChange={HandleChange} value="electronics" /> <label>Electronics</label>
                            </div>
                            <div>
                            <input type="checkbox" name="category" onChange={HandleChange} value="women clothing" /> <label>Women clothing</label>
                            </div>
                   
                        
                    </Grid>
                    <Grid item xs={10}>
                    <Grid container spacing={2}>
                        {ProductData.map((item,index)=>(                           
                            <Grid item xs={4} key={index}> 
                                <Card className={classes.CardClass}>
                                    <CardContent> 
                                        <img src={item.image} className={classes.Productimage}/>
                                        <Divider className={classes.DividClass} />

                                        <Typography>Name: {item.title}</Typography>
                                        <Typography>Price: Rs.{item.price}/-</Typography> 
                                        
                                        <Divider className={classes.DividClass} />
                                        <ButtonComponrnt type="submit" onClick={(e)=>HnadleCart(item)} value="Add to cart" />
                                        <Link to={`/productDetails/${item.id}`} className={classes.LinkClass}><ButtonComponrnt value="View Details" /></Link>
                                    </CardContent>
                                    </Card>

                            </Grid> 
                        ))}
                        </Grid>
                    </Grid>
                </Grid> 
            </div>
            <CartComponent CartItem={Cart} RemoveCart={RemoveCart} />
        </div>
      )
  }
  
  export default ProductComponent;