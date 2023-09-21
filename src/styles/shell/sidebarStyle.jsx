// ##############################
// // // Sidebar styles
// #############################

import {
  drawerWidth,
  transition,
  boxShadow,
  defaultFont,
  successColor,
  warningColor,
  dangerColor,
  boxShadowFn
} from "styles/variable";

const sidebarStyle = theme => ({
  linkDiv: {
    position: "absolute",
    bottom: 0,
    width: "100%"
  },
  linkDivider: {
    marginTop: "auto"
  },
  drawerPaper: {
    border: "none",
    position: "relative",
    top: "0",
    bottom: "0",
    left: "0",
    zIndex: "1",
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    // overflow: 'auto',
    ...boxShadow,
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      position: "relative",
      marginBottom: "5px"
      //height: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
      ...boxShadow,
      position: "fixed",
      display: "block",
      top: "0",
      height: "100%",
      right: "0",
      left: "auto",
      zIndex: "1032",
      visibility: "visible",
      overflowY: "visible",
      borderTop: "none",
      textAlign: "left",
      paddingRight: "0px",
      paddingLeft: "0",

      transform: `translate3d(${drawerWidth}px, 0, 0)`,
      ...transition
    }
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 6,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 6
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 2px",
    ...theme.mixins.toolbar
  },
  logo: {
    position: "relative",
    padding: "15px 15px",
    zIndex: "4",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0",

      height: "1px",
      right: "15px",
      width: "calc(100% - 30px)",
      backgroundColor: "rgba(180, 180, 180, 0.3)"
    }
  },
  logoLink: {
    ...defaultFont,
    textTransform: "uppercase",
    width: "100%",
    padding: "5px 0",
    display: "inline-flex",
    fontSize: "22px",
    textAlign: "left",
    fontWeight: "400",
    lineHeight: "30px",
    textDecoration: "none",
    backgroundColor: "transparent",
    "&,&:hover": {
      color: theme.palette.primary.contrastText,
    }
  },
  logoImage: {
    width: "30px",
    height: "30px",
    maxHeight: "30px",
    marginLeft: "10px",
    marginRight: "10px"
  },
  img: {
    width: "35px",
    top: "15px",
    position: "relative",
    verticalAlign: "middle",
    border: "0"
  },
  background: {
    position: "absolute",
    zIndex: "1",
    height: "100%",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    "&:after": {
      position: "absolute",
      zIndex: "3",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      background: "#000",
      opacity: ".8"
    }
  },
  list: {
    //marginTop: "20px",
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    marginBottom: "0",
    listStyle: "none"
  },
  item: {
    position: "relative",
    display: "block",
    textDecoration: "none"
  },
  itemLink: {
    width: "auto",
    transition: "all 300ms linear",
    margin: "10px 15px 0",
    borderRadius: "3px",
    position: "relative",
    display: "block",
    padding: "10px 15px",
    backgroundColor: "transparent",
    ...defaultFont
  },
  itemLinkClose: {
    marginLeft: "0px",
    paddingLeft: "10px"
  },
  itemIcon: {
    width: "24px",
    height: "30px",
    position: "relative",
    float: "left",
    marginRight: "15px",
    textAlign: "center",
    verticalAlign: "middle",
    color: "inherit"
  },
  itemText: {
    ...defaultFont,
    margin: "0",
    lineHeight: "30px",
    fontSize: "14px"
  },
  contrastColorText: {
    color: theme.palette.secondary.contrastText,
  },
  bottomSetting: {
    paddingLeft: 15,
    paddingTop: 6,
    paddingBottom: 2
  },
  buildText: {
    ...defaultFont,
    lineHeight: "10px",
    fontSize: "11px"
  },
  purple: {
    backgroundColor: theme.palette.primary.main,
    ...boxShadowFn(theme.palette.primary.main),
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      ...boxShadowFn(theme.palette.primary.main),
    }
  },
  itemLinkSelected: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    ...boxShadowFn(theme.palette.secondary.main),
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      ...boxShadowFn(theme.palette.secondary.main),
    }
  },
  green: {
    backgroundColor: successColor,
    boxShadow:
      "0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)",
    "&:hover": {
      backgroundColor: successColor,
      boxShadow:
        "0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)"
    }
  },
  orange: {
    backgroundColor: warningColor,
    boxShadow:
      "0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)",
    "&:hover": {
      backgroundColor: warningColor,
      boxShadow:
        "0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)"
    }
  },
  red: {
    backgroundColor: dangerColor,
    boxShadow:
      "0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)",
    "&:hover": {
      backgroundColor: dangerColor,
      boxShadow:
        "0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)"
    }
  },
  sidebarWrapper: {
    position: "relative",
    height: "calc(100vh - 50px)",
    overflow: "auto",
    width: drawerWidth,
    zIndex: "4",
    overflowScrolling: "touch"
  }
});

export default sidebarStyle;
