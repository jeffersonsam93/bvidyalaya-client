import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import trelloBoardStyle from "../styles/trelloBoard";

import userSample from "__mocks__/users";
import taskSample, { taskStatus } from "__mocks__/tasks";
import TaskCard from "./TaskCard";

class Board extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.getCards = this.getCards.bind(this);
    this.getUser = this.getUser.bind(this);
  }
  onDragStart() {
    /*...*/
  };
  onDragUpdate() {
    /*...*/
  }
  onDragEnd(result) {
    // the only one that is required
    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const source = result.source;
    const destination = result.destination;
    console.log(result, source, destination);


    // this.setState(reorderQuoteMap({
    //   quoteMap: this.state.quoteMap,
    //   source,
    //   destination,
    // }));
  };

  getCards(status) {
    return taskSample
      .filter(x => x.status === status)
      .map((task, index) => (
        <Draggable draggableId={task.id} index={index} key={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <TaskCard task={task} user={this.getUser(task)} />
            </div>
          )}
        </Draggable>

      ));
  }

  getUser(task) {
    return userSample.find(element => {
      return element.id === task.assignedTo;
    });
  }
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.container}
            justify="flex-start"
            spacing={16}
          >
            <DragDropContext
              onDragStart={this.onDragStart}
              onDragUpdate={this.onDragUpdate}
              onDragEnd={this.onDragEnd}
            >

              {Object.entries(taskStatus).map(([key, value]) => (
                <Droppable key={key} droppableId={key} type="TASK">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef}
                      style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'white' }}
                      {...provided.droppableProps}>
                      <Grid item style={{ height: "100%" }}>
                        <Paper className={classes.paper}>
                          <Typography gutterBottom className={classes.header} component="h4">
                            {value}
                          </Typography>
                          {this.getCards(key)}
                        </Paper>
                        {provided.placeholder}
                      </Grid>
                    </div>
                  )}
                </Droppable>

              ))}
            </DragDropContext>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(trelloBoardStyle)(Board)
);
