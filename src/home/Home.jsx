import React, { Component } from "react";
//import { findDOMNode } from "react-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
//import Divider from 'material-ui/Divider';
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Marquee from "react-fast-marquee";
//import Grow from "material-ui/transitions/Grow";
//import { Manager, Reference, Popper } from "react-popper";
import { Link } from "react-router-dom";
import LinkComp from '@material-ui/core/Link';
import cx from "classnames";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from '@material-ui/icons/Menu';
import { ECData } from "./HomeData";
import HomeCard from "./HomeCard";
import Login from "../shell/Login";
import Slide from "./Slide";
import { changeSiteData } from "core/state/actions";
import  Carousel from 'nuka-carousel';
import  Slide1 from '../assets/Slide1.jpg';
import  Slide2 from '../assets/Slide2.jpg';
import  Slide3 from '../assets/Slide3.jpg';
import  Slide4 from '../assets/Slide4.jpg';
import  Slide5 from '../assets/Slide5.jpeg';
import  Slide6 from '../assets/Slide6.jpg';
import  Slide7 from '../assets/Slide7.jpg';
import  Slide8 from '../assets/Slide8.jpg';
import  Slide9 from '../assets/Slide9.jpg';
import  Slide10 from '../assets/Slide10.jpg';
import  Slide11 from '../assets/Slide11.jpeg';
import  Slide12 from '../assets/Slide12.jpeg';
import  Slide13 from '../assets/Slide13.jpeg';
import  Slide14 from '../assets/Slide14.jpeg';
import  Slide15 from '../assets/Slide15.jpeg';
import  Slide16 from '../assets/Slide16.jpeg';

const styles = theme => ({
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
});

class Home extends Component {
  state = {
    open: false,
    events: [
      "scroll",
      //"mousewheel",
      "DOMMouseScroll",
      "MozMousePixelScroll",
      "resize",
      "touchmove",
      "touchend"
    ]
  };
  anchorEl = null;
  handleLoginClick = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };
  componentDidMount() {
    this.jumpToHash();
    this.state.events.forEach(type => {
      if (window.addEventListener) {
        window.addEventListener(type, this.onScroll.bind(this), false);
      } else {
        window.attachEvent("on" + type, this.onScroll.bind(this), false);
      }
    });

    //document.body.addEventListener("scroll", this.listenScrollEvent);
  }
  componentDidUpdate() {
    this.jumpToHash();
    this.state.events.forEach(type => {
      if (window.addEventListener) {
        window.removeEventListener(type, this.onScroll.bind(this), false);
      } else {
        window.attachEvent("on" + type, this.onScroll.bind(this), false);
      }
    });
    //document.body.removeEventListener("scroll", this.listenScrollEvent);
  }
  jumpToHash = () => {
    const { history } = this.props;
    const hash = history.location.hash;
    if (hash) {
      setTimeout(() => {
        const anchorName = hash.replace("#", "");
        console.log(anchorName);
        let anchorElement = document.getElementById(anchorName);
        //console.log(anchorElement);
        if (anchorElement) {
          anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
      //scrollToElement(hash, { offset: -120 });
    }
  };
  onScroll(e) {
    // const { history } = this.props;
    // history.location.hash = "";
    //console.log("Scroll event detected!", e);
  }
  render() {
    const { classes, ecData } = this.props;
    const { open } = this.state;
    const data = ecData ? ECData : ECData;
    
    return (
      <div className={classes.root} ref="homeDiv">
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
                src={data.logo}
                alt={data.Name}
                className={classes.logo}
                to={"/#home"}
              />
            </Link>
            <div>
            <Typography variant="h4" color="inherit" style={{fontFamily:'sans-serif'}}>
              {data.name}
            </Typography>
            <Typography variant="p" color="inherit" style={{fontFamily:'cursive',fontSize:'0.9rem'}}>
              {data.slogan}
            </Typography>
            </div>
            <Hidden mdUp>
              <IconButton className={classes.right} style={{color:'white'}} onClick={(evt)=>{
                this.setState({anchorEl:evt.target})
              }}>
                <MenuIcon/>
              </IconButton>
            </Hidden> 
            <Hidden smDown> 
            {data.details.map((det, index) => {
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
            })}
            </Hidden>
            {/* <div className={classes.verticalLine} /> */}
            {/* <Divider inset light style={{ width: "1px" }} /> */}
            {/* <Manager>
              <Reference>
                {({ ref }) => (
                  <Button
                    className={classes.loginButton}
                    buttonRef={ref}
                    variant="raised"
                    size="small"
                    onClick={this.handleLoginClick}
                  >
                    Login
                    <KeyboardArrowDown
                      className={cx(classes.rightIcon, classes.iconSmall)}
                    />
                  </Button>
                )}
              </Reference>
              <Popper  placement="bottom-start" eventsEnabled={open}>
                {({ ref, style, placement, arrowProps }) => (
                  <div ref={ref} style={style} data-placement={placement}>
                    <Grow in={open} style={{ transformOrigin: "0 0 0" }}>
                      <Paper
                        className={classes.paper}
                        aria-hidden={!open}
                        elevation={8}
                      >
                        {open && <Login aria-hidden={!open} />}
                      </Paper>
                    </Grow>
                    <div ref={arrowProps.ref} style={arrowProps.style} />
                  </div>
                )}
              </Popper>
            </Manager> */}
            {/* <Button
              className={classes.loginButton}
              buttonRef={node => {
                this.anchorEl = node;
              }}
              variant="raised"
              size="small"
              color="secondary"
              onClick={this.handleLoginClick}
            >
              Login
              <KeyboardArrowDown
                className={cx(classes.rightIcon, classes.iconSmall)}
              />
            </Button> */}
            {/* <Popover
              open={open}
              anchorEl={this.anchorEl}
              onClose={this.handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
            >
              <Login popup={true} />
            </Popover> */}
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
          <Slide src={Slide1} data="Time is the school in which we learn, time is the fire in which we burn" />
          <Slide src={Slide2} data="A good teacher is like a candle – it consumes itself to light the way for others" />
          <Slide src={Slide13} data="The best education is not given to students; it is drawn out of them" />
          <Slide src={Slide15} data="Nothing is impossible. The word itself says I'm possible" />
          <Slide src={Slide3} data="Education is not the filling of a pot but the lighting of a fire" />
          <Slide src={Slide4} data="We teach students to see vitality in themselves" />
          <Slide src={Slide5} data="Alone we can do so little; together we can do so much" />
          <Slide src={Slide6} data="Nothing is impossible. The word itself says I'm possible" />
          <Slide src={Slide7} data="Let us make learning fun" />
          <Slide src={Slide8} data="Exercise not only changes your body, it changes your mind, your attitude and your mood" />
          <Slide src={Slide9} data="Shoot for your Goals" />
          <Slide src={Slide10} data="Graduation Day Celebrations!!!" />
          <Slide src={Slide11} data="Graduation Day Celebrations!!!" />
          <Slide src={Slide12} data="Graduation Day Celebrations!!!" />
          <Slide src={Slide14} data="Graduation Day Celebrations!!!" />
          <Slide src={Slide16} data="Graduation Day Celebrations!!!" />
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
          }}
        >
            <b>Admissions are open for the year {new Date().getMonth()<4?new Date().getFullYear()-1:new Date().getFullYear()}-{new Date().getMonth()<4?new Date().getFullYear():new Date().getFullYear()+1} for classes Pre K.G. to V.<LinkComp className={classes.linkAnimation} href={"#ctu"}>Click here</LinkComp> to fill the form.</b>&nbsp;&nbsp;&nbsp;
        </div>
        </Hidden>
        <Hidden smDown> 
        <div
          style={{
            width: '100%',
            whiteSpace: 'nowrap',
            color:'red'
          }}
        >
          <Marquee speed={40} pauseOnHover={true}>
            <b>Admissions are open for the year {new Date().getMonth()<4?new Date().getFullYear()-1:new Date().getFullYear()}-{new Date().getMonth()<4?new Date().getFullYear():new Date().getFullYear()+1} for classes Pre K.G. to V.<LinkComp style={{color:"blue",cursor:'pointer'}} href={"#ctu"}>Click here</LinkComp> to fill the form.</b>&nbsp;&nbsp;&nbsp;
          </Marquee>
        </div>
        </Hidden>
        <br/>
        {data.details.map((det, index) => {
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
        })}
        </div>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={()=>{this.setState({anchorEl:null})}}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
           {data.details.map((det, index) => {
            return(<Link
              to={"/#" + det.id}
            >
              <MenuItem onClick={()=>{this.setState({anchorEl:null})}}>{det.name}</MenuItem>
            </Link>);
           })
          }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ecData: state.setting.siteData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSiteData: () => {
      dispatch(changeSiteData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(Home)
);
