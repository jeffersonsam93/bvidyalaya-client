import { boxShadowFn } from "styles/variable";

const trelloBoardStyle = theme => ({
  root: {
    flexGrow: 1,
    height: "100%",
    width: "100%"
  },
  container: {
    height: "100%",
    //padding: 5,
    paddingBottom: 0,
    flexWrap: "nowrap",
    margin: 0,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  paper: {
    height: "100%",
    width: 250,
    margin: "4px 3px",
    padding: "2px 5px"
  },
  header: {
    background: theme.palette.secondary.main,
    ...boxShadowFn(theme.palette.secondary.main),
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      ...boxShadowFn(theme.palette.secondary.main),
    }
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

const tastCardStyle = {
  card: {
    maxWidth: 345
  },
  userAvatar: {
    float: "left"
  },
  
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
};
export { tastCardStyle };
export default trelloBoardStyle;
