import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import cx from "classnames";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import Button from "@material-ui/core/Button";
//import ReactDataGrid from "react-data-grid";

import rtStyle from "./styles/rtStyle";

import { Tabs, Tab } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import "ag-grid/dist/styles/ag-grid.css";
//import "ag-grid/dist/styles/ag-theme-balham.css";
import "ag-grid/dist/styles/ag-theme-material.css";
import Task from "./tasks/Task";
import Board from "./trello-board/Board";

class RT extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.content}>
        <Typography component="div" className={classes.typography}>
          <Button
            color="inherit"
            className={classes.linkButtons}
          >
            Filters
            <KeyboardArrowDown
              className={cx(classes.rightIcon, classes.iconSmall)}
            />
          </Button>
        </Typography>
        <Tabs
          value={value}
          color="inherit"
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab disableRipple color="inherit" classes={{ root: classes.tabRoot }} label="List" />
          <Tab
            disableRipple
            color="inherit"
            classes={{ root: classes.tabRoot }}
            label="Board"
          />
        </Tabs>
        {value === 0 && <Task />}
        {value === 1 && <Board />}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(rtStyle, { withTheme: true })(RT)
);
