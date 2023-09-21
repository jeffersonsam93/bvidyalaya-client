import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Radio, RadioGroup } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import ReplayIcon from "@material-ui/icons/Replay";
import Switch from '@material-ui/core/Switch';
import {
  FormGroup,
  FormLabel,
  FormControl,
  FormControlLabel
  //FormHelperText
} from "@material-ui/core";
import { SketchPicker } from "react-color";
import { changeSiteData } from "core/state/actions";
import { primaryColor, secondaryColor, themeType } from "styles/variable";
import {
  changePrimary,
  changeSecondary,
  changeThemeType,
  resetTheme
} from "core/state/actions";

const styles = theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  radioRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  button: {
    margin: theme.spacing.unit,
    marginLeft: "auto"
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

class Setting extends Component {
  handleChange = event => {
    //this.setState({ themeType: event.target.value });
    this.props.changeThemeType(event.target.value);
  };
  render() {
    const { classes, ecData, primary, secondary, themeType } = this.props;

    return (
      <FormControl component="div" className={classes.formControl}>
        {/* <FormLabel component="legend">General</FormLabel> */}
        {/* <FormControlLabel
          control={
            <Switch
              checked={ecData}
              onChange={this.props.changeSiteData}
              value="Eagle"
            />
          }
          label="Eagle"
        /> */}
        <FormLabel component="legend">Theme</FormLabel>
        <div className={classes.radioRoot}>
          <RadioGroup
            aria-label="themetype"
            name="themetype"
            row
            className={classes.group}
            value={themeType}
            onChange={this.handleChange}
          >
            <FormControlLabel value="light" control={<Radio />} label="Light" />
            <FormControlLabel value="dark" control={<Radio />} label="Dark" />
          </RadioGroup>
          <Button
            className={classes.button}
            size="small"
            onClick={this.props.resetTheme}
          >
            Reset
            <ReplayIcon
              className={classNames(classes.rightIcon, classes.iconSmall)}
            />
          </Button>
        </div>
        <FormGroup row>
          <FormControl component="div" className={classes.formControl}>
            <FormLabel component="legend">Primary</FormLabel>
            <SketchPicker
              disableAlpha
              color={primary}
              onChangeComplete={col => this.props.changePrimary(col.hex)}
            />
          </FormControl>
          <FormControl component="div" className={classes.formControl}>
            <FormLabel component="legend">Secondary</FormLabel>
            <SketchPicker
              disableAlpha
              color={secondary}
              onChangeComplete={col => this.props.changeSecondary(col.hex)}
            />
          </FormControl>
          {/* <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Error</FormLabel>
            <SketchPicker
            disableAlpha
              color={this.state.background}
              onChangeComplete={this.handleChangeComplete}
            />
          </FormControl> */}
        </FormGroup>
      </FormControl>
    );
  }
}

Setting.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    primary: state.setting.primaryColor || primaryColor,
    secondary: state.setting.secondaryColor || secondaryColor,
    themeType: state.setting.themeType || themeType,
    ecData: state.setting.siteData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePrimary: col => {
      dispatch(changePrimary(col));
    },
    changeSecondary: col => {
      dispatch(changeSecondary(col));
    },
    changeThemeType: typ => {
      dispatch(changeThemeType(typ));
    },
    resetTheme: () => {
      dispatch(resetTheme());
    },
    changeSiteData: () => {
      dispatch(changeSiteData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(Setting)
);
