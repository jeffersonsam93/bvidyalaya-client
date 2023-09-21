import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import taskStyle from "../styles/taskStyle";

import { AgGridReact } from "ag-grid-react";

import userSample from "../../../__mocks__/users";
import taskSample, { taskStatus } from "../../../__mocks__/tasks";

class Task extends Component {
  static propTypes = {};
  state = {
    columnDefs: [
      { headerName: "Id", field: "id" },
      { headerName: "Summary", field: "summary" },
      { headerName: "Description", field: "description" },
      {
        headerName: "Status", field: "status", valueGetter: function statusValueGetter(params) {
          const status = taskStatus[params.data.status] || params.data.status;
          return status;
        }
      },
      {
        headerName: "Assigned To", field: "assignedTo", valueGetter: function assignedToValueGetter(params) {
          const user = userSample.find(element => {
            return element.id === params.data.assignedTo;
          });
          return user ? user.fullName : params.data.assignedTo;
        }
      }
    ],
    rowData: taskSample,
    style: {
      width: '100%',
      //height: '100%'
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={this.state.style} className={classes.content + " ag-theme-material"}>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(taskStyle, { withTheme: true })(Task)
);
