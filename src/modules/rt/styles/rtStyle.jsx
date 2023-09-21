import { successColor } from "styles/variable";

const rtStyle = theme => ({
  successText: {
    color: successColor
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  linkButtons: {
    textTransform: "inherit"
  },
  upArrowCardCategory: {
    width: 14,
    height: 14
  },
  content: {
    height: "100%",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column"
  },

  tabsRoot: {
    borderBottom: `1px solid #e8e8e8`,
    //flex: 1
  },
  tabsIndicator: {
    backgroundColor: theme.palette.secondary.main
  },
  tabRoot: {
    textTransform: "initial",
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 2,
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.action.active,
      opacity: 1
    },
    "&$tabSelected": {
      color: theme.palette.action.selected,
      fontWeight: theme.typography.fontWeightMedium
    },
    "&:focus": {
      color: theme.palette.action.active,
    }
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 2,
    //flex: 0
  }
});

export default rtStyle;
