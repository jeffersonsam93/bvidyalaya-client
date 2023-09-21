import PropTypes from "prop-types";

const DataTypes = {
  number: 1,
  string: 2
};

const DataColumn = {
  header: PropTypes.string,
  field: PropTypes.string.isRequired,
  dataType: PropTypes.oneOf([DataTypes.number, DataTypes.string])
};

export { DataTypes, DataColumn };
