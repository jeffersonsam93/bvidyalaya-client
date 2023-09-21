import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
//import { withStyles } from 'material-ui/styles';
import { Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel
} from "@material-ui/core";
import HeaderCell from "./HeaderCell";
import { DataTypes, DataColumn } from "../constants";

class HeaderRow extends React.Component {
  static propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape(DataColumn)).isRequired,
    //numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired
  };

  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy, columns } = this.props;

    return (
      <TableRow>
        <TableCell padding="checkbox">
          {/* <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
          /> */}
        </TableCell>

        {columns.map(column => {
          return (
            <HeaderCell
              key={column.field}
              column={column}
              order={order}
              orderBy={orderBy}
              onRequestSort={this.props.onRequestSort}
            />
          );
        }, this)}
      </TableRow>
    );
  }
}

export default HeaderRow;
