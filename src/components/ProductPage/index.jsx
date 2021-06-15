import React, {useReducer} from 'react';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Scrollbars } from 'react-custom-scrollbars';
import useForceUpdate from 'use-force-update';
import StarIcon from '@material-ui/icons/Star';
import Divider from '@material-ui/core/Divider';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import LabelIcon from '@material-ui/icons/Label';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      marginTop: '80px',
      flexGrow: 1,
      flexWrap: 'wrap',
      '& > *': {
      },
      minHeight: '90vh',
      height: '100%',
    },
    media: {
        height: '50vh',
      },
    cardSlider: {
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap-reverse',
        '& > *': {
          margin: theme.spacing(1),
        },
        minHeight: '50vh',
    },
    smallImg: {
        height: '6vh',
        cursor: 'pointer',
        border: '2px solid #f44336',
    },
    smallImgNoBorder: {
        height: '6vh',
        cursor: 'pointer',
        border: '0px solid #f44336',
    },
    actionLength: {
        overflowX: 'auto',
        width: '100%',
        maxWidth: '40vh'
    },
    button: {
        margin: theme.spacing(1),
        backgroundColor: 'green',
        color: 'white',
        fontSize: '14px',
        height: '25px',
        width: '25px',
      },
    buttonCart: {
        button: {
            margin: theme.spacing(1),
          },
    },
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
  }));
  
function ProductPage(props) {
    const classes = useStyles();
    const [Image, setImage] = React.useState('static/image/jujutsu-kaisen-kento-nanami-uhdpaper.com-4K-7.3061.jpg');
    const [selectTrue, setselectTrue] = React.useState('1');
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const ChangeImage = (event) => {
        console.log(event.target.id);
        setImage(event.target.src);
        setselectTrue(event.target.id);
        forceUpdate();
    }


  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{marginTop: '20px'}}>
            <Paper elevation={1}>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <Card className={classes.cardSlider} elevation={0}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Image}
                                title="Product"
                                />
                                {/* <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent> */}
                            </CardActionArea>
                            <CardActions className={classes.actionLength}>
                                <img id="1" className={selectTrue === '1' ? classes.smallImg : classes.smallImgNoBorder } onClick={(event) => ChangeImage(event)} src='static/image/jujutsu-kaisen-kento-nanami-uhdpaper.com-4K-7.3061.jpg' alt='!!!' />
                                <img id="2" className={selectTrue === '2' ? classes.smallImg : classes.smallImgNoBorder } onClick={(event) => ChangeImage(event)} src='static/image/jujutsu-kaisen-megumi-fushiguro-wolf-summon-uhdpaper.com-4K-7.3054.jpg' alt='!!!' />
                                <img id="3" className={selectTrue === '3' ? classes.smallImg : classes.smallImgNoBorder } onClick={(event) => ChangeImage(event)} src='static/image/jujutsu-kaisen-satoru-gojo-glasses-uhdpaper.com-4K-8.1764.jpg' alt='!!!' />
                                <img id="4" className={selectTrue === '4' ? classes.smallImg : classes.smallImgNoBorder } onClick={(event) => ChangeImage(event)} src='static/image/jujutsu-kaisen-satoru-gojo-glasses-uhdpaper.com-4K-8.1779.jpg' alt='!!!' />
                                <img id="5" className={selectTrue === '5' ? classes.smallImg : classes.smallImgNoBorder } onClick={(event) => ChangeImage(event)} src='static/image/jujutsu-kaisen-satoru-gojo-hollow-purple-uhdpaper.com-4K-7.3201.jpg' alt='!!!' />
                                <img id="6" className={selectTrue === '6' ? classes.smallImg : classes.smallImgNoBorder } onClick={(event) => ChangeImage(event)} src='static/image/jujutsu-kaisen-satoru-gojo-smoking-sunglasses-uhdpaper.com-4K-8.2557.jpg' alt='!!!' />
                                <img id="7" className={selectTrue === '7' ? classes.smallImg : classes.smallImgNoBorder } onClick={(event) => ChangeImage(event)} src='static/image/jujutsu-kaisen-satoru-gojo-sunglasses-uhdpaper.com-4K-7.3062.jpg' alt='!!!' />
                                <img id="8" className={selectTrue === '8' ? classes.smallImg : classes.smallImgNoBorder } onClick={(event) => ChangeImage(event)} src='static/image/jujutsu-kaisen-satoru-gojo-uhdpaper.com-4K-7.3244.jpg' alt='!!!' />                                
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={6} style={{marginTop: '20px'}}>
                        <Grid container spacing={2}>
                            <Grid item md={12} style={{padding: '25px'}}>
                                <Typography variant="h6">Mi 4A PRO 80 cm (32 inch) HD Ready LED Smart Android TV</Typography>
                                <Typography variant="body1">
                                    <Button
                                        variant="contained"
                                        className={classes.button}
                                        endIcon={<StarIcon style={{fontSize: '15px'}}/>}
                                    >
                                        4.4
                                    </Button>
                                    4.46,03,997 Ratings & 62,633 Reviews
                                </Typography>
                                <br />
                                <Typography variant="h4">₹14,999  <p style={{display: 'inline',fontSize: '18px'}}><strike>₹19,999</strike> &nbsp; <span style={{color: 'green'}}>25% off</span> </p></Typography>
                                <Typography variant="h6"> <span style={{fontSize: '18px'}}>Available offers</span> </Typography>
                                <Typography variant="h6"> <span style={{fontSize: '12px'}}> <LabelImportantIcon style={{fontSize: '12px', color: 'green'}}/> <b>Bank Offer</b> 10% off on SBI Credit Card, up to ₹1250. On orders of ₹5000 and above T&C</span> </Typography>
                                <Typography variant="h6"> <span style={{fontSize: '12px'}}> <LabelImportantIcon style={{fontSize: '12px', color: 'green'}}/> <b>Bank Offer</b>10% off on SBI Credit Card EMI, up to ₹1500. On orders of ₹5000 and above T&C</span> </Typography>
                                <Typography variant="h6"> <span style={{fontSize: '12px'}}> <LabelImportantIcon style={{fontSize: '12px', color: 'green'}}/> <b>Bank Offer</b> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</span> </Typography>
                                <Typography variant="h6"> <span style={{fontSize: '12px'}}>Get a Google Nest Hub (Chalk) at just ₹5,999 on purchase of select TVs, laptops, ACs and mobile T&C</span> </Typography>
                                <br />
                                <Grid container spacing={2}>
                                    <Grid item md={4} >
                                        <Button
                                            variant="contained"
                                            size="large"
                                            style={{backgroundColor: '#ff9f00', color: 'white'}}
                                            className={classes.buttonCart}
                                            startIcon={<ShoppingCartIcon />}
                                        >
                                            ADD TO CART
                                        </Button>
                                    </Grid>
                                    <Grid item md={4} >
                                        <Button
                                            style={{backgroundColor: '#fb641b', color: 'white'}}
                                            variant="contained"
                                            size="large"
                                            className={classes.buttonCart}
                                            startIcon={<OfflineBoltIcon />}
                                        >
                                            BUY NOW
                                        </Button>
                                    </Grid>
                                </Grid>
                                <br />
                                <Divider />
                                <Typography variant="h4"> <span style={{fontSize: '18px'}}>Highlights</span> </Typography>
                                <List component="nav" className={classes.list} aria-label="contacts">
                                    <ListItem button>
                                        <ListItemIcon>
                                           <Typography variant="h6" style={{fontSize: '17px'}}>  <LabelIcon style={{fontSize: '12px', color: '#fb641b'}} /> &nbsp;Supported Apps: Netflix </Typography> 
                                        </ListItemIcon>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                        <Typography variant="h6" style={{fontSize: '17px'}}> <LabelIcon style={{fontSize: '12px', color: '#fb641b'}} /> &nbsp;Operating System: Android (Google) </Typography>
                                        </ListItemIcon>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                        <Typography variant="h6" style={{fontSize: '17px'}}>  <LabelIcon style={{fontSize: '12px', color: '#fb641b'}} /> &nbsp;Resolution: HD Ready 1366 x 768 Pixels </Typography>
                                        </ListItemIcon>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                        <Typography variant="h6" style={{fontSize: '17px'}}> <LabelIcon style={{fontSize: '12px', color: '#fb641b'}} /> &nbsp; Sound Output: 20 W </Typography>
                                        </ListItemIcon>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                        <Typography variant="h6" style={{fontSize: '17px'}}> <LabelIcon style={{fontSize: '12px', color: '#fb641b'}} /> &nbsp; Refresh Rate: 60 Hz </Typography>
                                        </ListItemIcon>
                                    </ListItem>
                                    
                                </List>                                
                                <Divider />
                                <Typography variant="h4"> <span style={{fontSize: '18px'}}>Product description</span> </Typography>
                                <Typography variant="h4"> <small style={{fontSize: '10px', color: 'gray'}}>Colour:Magnet Black  |  Size name:2GB RAM</small> </Typography>
                                <Typography variant="h6"> <span style={{fontSize: '14px'}}>Introducing Tecno Spark 7, a perfect smartphone with superior specs yet affordable on your pocket. It has a massive 6000mAh battery with up to 40 days long standby for non-stop action. You get a big 6.52 HD+ display to enjoy movies and games on a bigger screen. Spark 7 comes with 16MP AI Dual rear camera with f/1.8 large aperture and Quad flash and 8MP AI selfie camera with Dual front flash to capture clear and vivid images. Its has unique camera and entertaiment features like Time Lapse,Video Bokeh,Slow Motion and Audio Share . For security you get smart fingerprint sensor and face unlock features. Have fun with this budget Hero</span> </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductPage;
