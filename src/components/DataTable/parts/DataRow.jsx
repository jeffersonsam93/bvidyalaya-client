import React from "react";
import PropTypes from "prop-types";
//import { withStyles } from 'material-ui/styles';
import { TableCell, TableRow } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import DataCell from "./DataCell";
import { DataTypes, DataColumn } from "../constants";

class DataRow extends React.Component {
  static propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape(DataColumn)).isRequired,
    data: PropTypes.object.isRequired,
    selected: PropTypes.bool
  };

  render() {
    const { columns, data, selected } = this.props;
    return (
      <TableRow
        style={{ width: "100%" }}
        hover
        onClick={event => this.props.handleClick(event, data.id)}
        role="checkbox"
        aria-checked={selected}
        tabIndex={-1}
        selected={selected}
      >
        <TableCell padding="checkbox">
          <Checkbox checked={selected} />
        </TableCell>
        {columns.map(column => {
          return <DataCell key={column.field} column={column} data={data} />;
        }, this)}
      </TableRow>
    );
  }
}

export default DataRow;
