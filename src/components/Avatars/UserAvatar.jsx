import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";

const styles = theme => ({
  row: {
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    margin: 5,
    width: 35,
    height: 35,
    fontWeight: 400
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
});

function UserAvatar(props) {
  const { classes, large, user, className, onClick } = props;
  const name = user.fullName || user.name;
  let initials = name;
  if (!user.hasImage) {
    initials = initials.match(/\b\w/g) || [];
    initials = (
      (initials.shift() || "") + (initials.pop() || "")
    ).toUpperCase();
  }
  const avatarClasses = classNames({
    [" " + classes.bigAvatar]: large
  });
  return (
    <div className={classNames(classes.row, className)} onClick={onClick} >
      <Tooltip enterDelay={300} leaveDelay={300} title={name}>
        <Avatar
          aria-label={name}
          alt={name}
          src={user.hasImage ? user.url : null}
          color="inherit"
          className={classNames(classes.avatar + avatarClasses)}
        >
          {!user.hasImage ? initials : null}
        </Avatar>
      </Tooltip>
    </div>
  );
}

UserAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
  large: PropTypes.bool,
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(UserAvatar);
