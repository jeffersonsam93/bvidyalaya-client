import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
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
}));

const Slide = (props) => {
  const classes = useStyles();
  const { data, src } = props;

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

export default Slide;
