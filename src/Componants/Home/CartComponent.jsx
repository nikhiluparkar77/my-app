import React,{useEffect,useState} from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from "./HomeStyle/CartStyle";
import Drawer from '@material-ui/core/Drawer'; 
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List'; 
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton'; 
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem'; 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
 



const CartComponent = ({CartItem,RemoveCart}) => { 
    const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [TatalAmt,setTatalAmt] = useState([])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
      let CartTotal = CartItem;
      let getPrice = CartTotal.map(item => item.price);
      const TotalPrice = getPrice.reduce((acc,val)=>{
          return acc + val;
      },0)
      setTatalAmt(TotalPrice);
  })

  const HandleRemoveCart = (id) => {
    RemoveCart(id);
  }

   
    return (
        <div className={classes.root}>
            <CssBaseline />
     
         
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide), classes.MenuBar}
          >
            <ShoppingCartIcon  />
          </IconButton>
      
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          Cart
        </div>
        <Divider />
        <List>
        <ListItem>
              <Typography className={classes.CartLefttext} variant="p">Name</Typography>             
              <Typography className={classes.CartRighttext} variant="p">Price</Typography>
            </ListItem>
            <Divider />
           {CartItem.map((item,index) => (
               <>
            <ListItem key={index}>
              <Typography className={classes.CartLefttext} variant="p">{item.title}</Typography>             
              <Typography className={classes.CartRighttext} variant="p">Rs:- {item.price}/-</Typography>
              <CloseIcon className={classes.RemoveCart} onClick={(e)=>HandleRemoveCart(item.id)} />
            </ListItem>
            <Divider />
            </>
           )) }

            <ListItem>
              <Typography className={classes.CartLefttext} variant="p">Total Amount:- {CartItem.length === 0 ? 0 : TatalAmt}</Typography>      
            </ListItem>
           
         
        </List>
        <Divider />
      
      </Drawer>
        </div>
    )
}

export default CartComponent;
