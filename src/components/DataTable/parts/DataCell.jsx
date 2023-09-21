import React from "react";
import PropTypes from "prop-types";
import { DataTypes, DataColumn } from "../constants";
import { TableCell, TableSortLabel } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

class DataCell extends React.Component {
  static propTypes = {
    column: PropTypes.shape(DataColumn).isRequired,
    data: PropTypes.object.isRequired,
    disablePadding: PropTypes.bool
  };
  render() {
    const { column, data, disablePadding } = this.props;
    const isNumeric = column.dataType === DataTypes.number;

    return (
      <TableCell
        numeric={isNumeric}
        padding={disablePadding ? "none" : "default"}
      >
        {data[column.field]}
      </TableCell>
    );
  }
}

export default DataCell;
