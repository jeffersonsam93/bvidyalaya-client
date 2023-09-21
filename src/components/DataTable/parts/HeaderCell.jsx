import React from "react";
import PropTypes from "prop-types";
import { DataTypes, DataColumn } from "../constants";
import { TableCell, TableSortLabel } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

class HeaderCell extends React.Component {
  static propTypes = {
    column: PropTypes.shape(DataColumn).isRequired,
    disablePadding: PropTypes.bool,
    order: PropTypes.string,
    orderBy: PropTypes.string
  };

  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { column, disablePadding, orderBy, order } = this.props;
    const isNumeric = column && column.dataType === DataTypes.number;

    return (
      <TableCell
        numeric={isNumeric}
        padding={disablePadding ? "none" : "default"}
        sortDirection={orderBy === column.field ? order : false}
      >
        <Tooltip
          title="Sort"
          placement={isNumeric ? "bottom-end" : "bottom-start"}
          enterDelay={300}
        >
          <TableSortLabel
            active={orderBy === column.field}
            direction={order}
            onClick={this.createSortHandler(column.field)}
          >
            {column.header}
          </TableSortLabel>
        </Tooltip>
      </TableCell>
    );
  }
}

export default HeaderCell;
