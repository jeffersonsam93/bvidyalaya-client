import React, { useEffect, useRef, useState } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
//import Divider from 'material-ui/Divider';
import Button from "@material-ui/core/Button";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Marquee from "react-fast-marquee";
//import Grow from "material-ui/transitions/Grow";
//import { Manager, Reference, Popper } from "react-popper";
import { Link } from "react-router-dom";
import cx from "classnames";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from '@material-ui/icons/Menu';
import { useLocation } from "react-router-dom";
import  Carousel from 'nuka-carousel';
import HomeCard from "./HomeCard";
import Slide from "./Slide";
import { getEntry } from "../contentstack";

const useStyles = makeStyles(theme => ({
  root: {
    flex: "1 0 100%",
    background:'white'
  },
  appBar: {
    flexGrow: 1,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.primary.main
        : theme.palette.primary.dark,
    color: theme.palette.primary.contrastText
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  right: {
    marginLeft: "auto",
    marginRight: "10px"
  },
  loginButton: {
    marginLeft: "20px",
    marginRight: "10px",
    color: theme.palette.secondary.main
  },
  linkButtons: {
    textTransform: "inherit"
  },
  addlCard: {
    height: "100%",
    minHeight:'91vh',
  },
  hero: {
    flex: "0 0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.primary.main
        : theme.palette.primary.dark,
    color: theme.palette.primary.contrastText
  },
  content: {
    paddingBottom: theme.spacing.unit * 8,
    paddingTop: theme.spacing.unit * 8,
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing.unit * 12
    }
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width:'100%',
    height:'86vh'
  },
  headline: {
    maxWidth: 500,
    textAlign: "center"
  },
  button: {
    marginTop: theme.spacing.unit * 3
  },
  logo: {
    //margin: '20px 0',
    // width: '100%',
    // height: '35vw',
    maxHeight: 50,
    cursor:"pointer",
    marginRight:5
  },
  verticalLine: {
    width: "0px" /* Use only border style */,
    height: "45px",
    float: "left",
    border: "1px inset"
  },
  steps: {
    maxWidth: theme.spacing.unit * 130,
    margin: "auto"
  },
  step: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`
  },
  stepIcon: {
    marginBottom: theme.spacing.unit
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  "@keyframes spinners": {
    "25%": {color:'red'},
    "50%": {color:'blue'},
    "75%": {color:'red'},
    "100%": {color:'blue'},
  },
  linkAnimation:{
    cursor:'pointer',
    animationName: '$spinners',
    animationDuration: '1s',
    animationIterationCount: 'infinite',
  }
}));

const Home = (props) => {
  const classes = useStyles();
  const [slideData,setSlideData] = useState([]);
  const [infoText,setInfoText] = useState('');
  const [admission_url,setAdmisssion_url] = useState('');
  const [pageData,setPageData] = useState({});
  const [anchorEl,setanchorEl] = useState(null);
  const homeDiv = useRef();
  const hashLocation = useLocation()
  console.log(hashLocation)

  const structureHomeData = (dt_header,dt_wwa,dt_wwd,dt_wea,dt_gallery,dt_contact_us) => {
    const obj_header=dt_header[0];
    const obj_wwa=dt_wwa[0];
    const obj_wwd=dt_wwd[0];
    const obj_wea=dt_wea[0];
    const obj_gallery=dt_gallery[0];
    const obj_contact_us=dt_contact_us[0];
    const wwa= {
      id: 'wwa',
      name: obj_wwa.title,
      paras:[obj_wwa.description],
      tileData: obj_wwa.management.map((dta)=>{
        return { name: dta.staff_name, detail: dta.role, animationIn: "fadeIn", animationOut: "fadeOut", img: dta.image_of_the_staff.url}
      })
    };
    const wwd= {
      id: "wwd",
      name: obj_wwd.title,
      paras:[obj_wwd.description]
    };
    const wea= {
      id: "wea",
      name: obj_wea.title,
      paras:[],
      data: {
        addressImg:obj_wea.location_image.url,
        address:obj_wea.address,
        mobNumber:obj_wea.web_contact.phone_number,
        email: obj_wea.web_contact.email,
        facebook: obj_wea.web_contact.facebook_link.href,
        location: obj_wea.web_contact.google_map_link.href
      }
    }
    return {
      name: obj_header.title,
      slogan: obj_header.motto,
      logo: obj_header.logo.url,
      details: [
        wwa, wwd,wea
        ,
        {
          id: "gallery",
          name: obj_gallery.title,
          data: {
            events: obj_gallery.events.map((event)=>{
              return {
                event_name: event.event_name,
                event_date: new Date(event.event_date).toLocaleDateString('en-GB', {
                  day: 'numeric', month: 'short', year: 'numeric'
                }).replace(/ /g, '-'), 
                cover_pic:event.cover_pic.url,
                photos: event.event_photos.map((photo)=> {return {original:photo.url, thumbnail:photo.url}})
              }
            })
          },
          paras: []
        }
        ,
        {
          id: "ctu",
          name: "Reach Us",
          data: {
            admission_url:obj_contact_us.admission_url.href,
            staff_url:obj_contact_us.staff_url.href
          },
          paras: []
        }
      ]
    };
  }

  const initializeData =async() => {
    const dt_website_data = await getEntry({contentTypeUid:'whole_website', referenceFieldPath:['header','landing_page','who_we_are','where_we_are','what_we_do','gallery','contact_us']});
    const {landing_page, header, what_we_do, where_we_are, who_we_are, gallery, contact_us} = dt_website_data[0][0];
    const slideData=landing_page[0].carousel_slider.map((slide)=> { 
        return {
          slideImg: slide.carousel_photo.url,
          slideInfo: slide.caption_for_photo
        }
    });
    const infoText = landing_page[0].information_scroll;
    const data=structureHomeData(header,who_we_are,what_we_do,where_we_are,gallery,contact_us);
    console.log(data);
    setPageData(data);
    setSlideData(slideData);
    setInfoText(infoText);
    setAdmisssion_url(contact_us[0].admission_url.href);
  }

  const jumpToHash = () => {
    const { hash } = hashLocation;
    console.log(hash);
    if (hash) {
      setTimeout(() => {
        const anchorName = hash.replace("#", "");
        console.log(anchorName);
        let anchorElement = document.getElementById(anchorName);
        if (anchorElement) {
          anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  };
  useEffect(()=>{
    initializeData();
    jumpToHash();
  },[]);
  useEffect(()=>{
    jumpToHash();
  },[hashLocation]);
    return (
      <div className={classes.root} ref={homeDiv}>
        <AppBar
          className={classes.appBar}
          position="sticky"
          color="default"
          elevation={0.5}
        >
          <Toolbar>
            {/* <Typography variant="title" color="inherit">
              Title
            </Typography> */}
            <Link
              to={"/#home"}
            >
              <img
                src={pageData.logo}
                alt={pageData.name}
                className={classes.logo}
                to={"/#home"}
              />
            </Link>
            <div>
            <Typography variant="h4" color="inherit" style={{fontFamily:'sans-serif'}}>
              {pageData.name}
            </Typography>
            <Typography variant="p" color="inherit" style={{fontFamily:'cursive',fontSize:'0.9rem'}}>
              {pageData.slogan}
            </Typography>
            </div>
            <Hidden mdUp>
              <IconButton className={classes.right} style={{color:'white'}} onClick={(evt)=>{
                setanchorEl(evt.target)
              }}>
                <MenuIcon/>
              </IconButton>
            </Hidden> 
            <Hidden smDown> 
            { pageData && pageData.details ?pageData.details.map((det, index) => {
              const firstBtnClasses = cx({
                [" " + classes.right]: index === 0
              });
              return (
                <Button
                  key={det.id}
                  color="secondary"
                  className={classes.linkButtons + firstBtnClasses}
                  component={buttonProps => (
                    <Link
                      variant="button"
                      prefetch="true"
                      to={"/#" + det.id}
                      {...buttonProps}
                    />
                  )}
                >
                  {det.name}
                  <KeyboardArrowDown
                    className={cx(classes.rightIcon, classes.iconSmall)}
                  />
                </Button>
              );
            }):''}
            </Hidden>
          </Toolbar>
        </AppBar>
        <div>
        <div id="home" className={classes.hero} style={{paddingTop:'72px',marginTop:'-72px'}}>
          <div className={classes.text}>
          <Carousel 
          autoplay={true} 
          wrapAround={true} 
          dragging={true}
          easing="easeLinear"
          transitionMode="fade"
          withoutControls={true}
          speed={1000}
          pauseOnHover={false}
          defaultControlsConfig={{
           nextButtonText: '>',
           prevButtonText: '<',
          }}
          autoplayInterval={5000}
          >
          {slideData.map((slide)=><Slide src={slide.slideImg} data={slide.slideInfo} />)}
          </Carousel>
          </div>
          {/* <Paper className={classes.root} elevation={0.5}>
            <Typography variant="headline" component="h3">
              This is a sheet of paper.
          </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your
              application.
          </Typography>
          </Paper> */}
        </div>
        <Hidden mdUp>
        <div
          style={{
            width: '100%',
            color:'red',
            textAlign:'center',
            cursor: 'pointer'
          }}
          dangerouslySetInnerHTML={{__html: `<b>${infoText}</b>&nbsp;&nbsp;&nbsp;`}}
          onClick={()=>window.open(admission_url)}
        >
        </div>
        </Hidden>
        <Hidden smDown> 
        <div
          style={{
            width: '100%',
            whiteSpace: 'nowrap',
            color:'red',
            cursor: 'pointer'
          }}
        >
          <Marquee speed={40} pauseOnHover={true} >
            <div dangerouslySetInnerHTML={{__html: `<b>${infoText}</b>&nbsp;&nbsp;&nbsp;`}} onClick={()=>window.open(admission_url)}>

            </div>
          </Marquee>
        </div>
        </Hidden>
        <br/>
        {pageData && pageData.details ? pageData.details.map((det, index) => {
          return (
            <HomeCard className={classes.addlCard} key={det.id} data={det} />
            // <div id={det.id} key={det.id} className={classes.content}>
            //   <Typography
            //     variant="display2"
            //     component="h1"
            //     color="inherit"
            //     gutterBottom
            //   >
            //     {det.name}
            //   </Typography>
            //   {det.paras.map((par, idx) => {
            //     return (
            //       <Typography
            //         key={idx}
            //         variant="headline"
            //         component="div"
            //         color="inherit"
            //       >
            //         {par}
            //       </Typography>
            //     );
            //   })}
            // </div>
          );
        }): ''}
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={()=>{setanchorEl(null)}}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
           {pageData && pageData.details ? pageData.details.map((det, index) => {
            return(<Link
              to={"/#" + det.id}
            >
              <MenuItem onClick={()=>{setanchorEl(null)}}>{det.name}</MenuItem>
            </Link>);
           }) : ''
          }
        </Menu>
      </div>
    );
}



export default Home;
