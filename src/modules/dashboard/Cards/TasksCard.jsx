import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { Tabs, Tab } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { BugReport, Code, Cloud } from "@material-ui/icons";

import tasksCardStyle from "../styles/tasksCardStyle";
import Tasks from "../Tasks"


const bugs = [
  'Sign contract for "What are conference organizers afraid of?"',
  "Lines From Great Russian Literature? Or E-mails From My Boss?",
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  "Create 4 Invisible User Experiences you Never Knew About"
];

class TasksCard extends React.Component {
  constructor(props) {
    super(props);
    let rows = [];
    for (let i = 1; i < 10; i++) {
      rows.push({
        id: i,
        title: 'Title ' + i,
        count: i * 10
      });
    }
    this.state = {
      value: 0,
      columns: [
        {
          key: 'id',
          name: 'ID'
        },
        {
          key: 'title',
          name: 'Title'
        },
        {
          key: 'count',
          name: 'Count'
        }
      ], rows, selectedIndexes: []
    };
  }

  rowGetter = (i) => {
    return this.state.rows[i];
  };

  onRowsSelected = (rows) => {
    this.setState({ selectedIndexes: this.state.selectedIndexes.concat(rows.map(r => r.rowIdx)) });
  };

  onRowsDeselected = (rows) => {
    let rowIndexes = rows.map(r => r.rowIdx);
    this.setState({ selectedIndexes: this.state.selectedIndexes.filter(i => rowIndexes.indexOf(i) === -1) });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          classes={{
            root: classes.cardHeader,
            title: classes.cardTitle,
            content: classes.cardHeaderContent
          }}
          title="Tasks:"
          action={
            <Tabs
              classes={{
                flexContainer: classes.tabsContainer,
                indicator: classes.tabsIndicator

              }}
              value={this.state.value}
              onChange={this.handleChange}
            >
              <Tab
                classes={{
                  wrapper: classes.tabWrapper,
                  labelIcon: classes.labelIcon,
                  label: classes.label,
                  selected: classes.rootInheritSelected
                }}
                icon={<BugReport className={classes.tabIcon} />}
                label={"Bugs"}
              />
              <Tab
                classes={{
                  wrapper: classes.tabWrapper,
                  labelIcon: classes.labelIcon,
                  label: classes.label,
                  selected: classes.rootInheritSelected
                }}
                icon={<Code className={classes.tabIcon} />}
                label={"Features"}
              />
              <Tab
                classes={{
                  wrapper: classes.tabWrapper,
                  labelIcon: classes.labelIcon,
                  label: classes.label,
                  selected: classes.rootInheritSelected
                }}
                icon={<Cloud className={classes.tabIcon} />}
                label={"Others"}
              />
            </Tabs>
          }
        />
        <CardContent>
          {this.state.value === 0 && (
            <Typography component="div">
              <Tasks
                checkedIndexes={[0]}
                tasksIndexes={[0, 1]}
                tasks={bugs}
              />
            </Typography>
          )}
          {this.state.value === 1 && (
            <Typography component="div">
              <Tasks
                checkedIndexes={[0]}
                tasksIndexes={[0, 1]}
                tasks={bugs}
              />
            </Typography>
          )}
          {this.state.value === 2 && (
            <Typography component="div">
              <Tasks
                checkedIndexes={[0]}
                tasksIndexes={[0, 1]}
                tasks={bugs}
              />
            </Typography>
          )}
        </CardContent>
      </Card>
    );
  }
}

TasksCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(tasksCardStyle)(TasksCard);
