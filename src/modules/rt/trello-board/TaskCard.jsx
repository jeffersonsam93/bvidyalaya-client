import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent } from "@material-ui/core";
//import Button from "material-ui/Button";
import Typography from "@material-ui/core/Typography";

import { tastCardStyle } from "../styles/trelloBoard";
import UserAvatar from "../../../components/Avatars/UserAvatar";

class TaskCard extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    task: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };
  render() {
    const { classes, user, task } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <UserAvatar className={classes.userAvatar} user={user} />
            <Typography gutterBottom variant="headline" component="h2">
              {task.summary}
            </Typography>
            <Typography component="p">{task.description}</Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small" color="primary" style={{ marginLeft: "auto" }}>
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions> */}
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(tastCardStyle)(TaskCard)
);
