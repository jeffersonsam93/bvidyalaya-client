import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    btnroot: {
        '& > *': {
            margin: theme.spacing(1),
          },
        textAlign:'center',
      },
    root: {
        position: 'relative',
        textAlign: 'center',
        color: 'white',
      },
      img: {
        height: '91vh',
        width:'100%',
      },
      text:{
        position: 'absolute',
        bottom: '47px',
        left: '16px',
      }
});

class Slide extends React.Component {
  
  render() {
    const { classes, data, src } = this.props;

    return (
      <div className={classes.root}>
        <img src={src} alt="" className={classes.img} />
        <div className={classes.text}>
            <Typography variant="h4" gutterBottom>
                {data}
            </Typography>
        </div>
      </div>
    );
  }
}

Slide.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default withStyles(styles)(Slide);
