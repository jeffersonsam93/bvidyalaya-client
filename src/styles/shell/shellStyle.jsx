import { drawerWidth } from "styles/variable";

const shellStyle = theme => ({
  root: {
    flexGrow: 1,
    height: "100%",
    width: "100%",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "inline-flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,

    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    [theme.breakpoints.down("sm")]: {
      width: `calc(100%)`
    }
  },
  menuButton: {
    //marginLeft: 8,
    marginRight: 15,
    [theme.breakpoints.down("sm")]: {
      textAlign: "right"
    }
  },
  headerLinks: {
    //marginLeft: 8,
    flex: 1,
    marginRight: 10,
    textAlign: "right"
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 5,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 7
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    //padding: "0 8px",
    ...theme.mixins.toolbar,
    background: "inherit",
    paddingRight: 0,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 10,
      justifyContent: "space-between"
    }
  },
  content: {
    height: "100%",
    width: `calc(100% - ${drawerWidth}px)`,
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    //padding: theme.spacing.unit,
    paddingTop: 0,
    paddingRight: 0,
    [theme.breakpoints.down("sm")]: {
      width: `calc(100%)`
    }
  },
  actualContent: {
    overflow: "auto",
    height: "100%",
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit,
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    paddingTop: 0,
    paddingRight: 0
  }
});

export default shellStyle;
