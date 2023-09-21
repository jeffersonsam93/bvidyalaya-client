import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LocationOn from '@material-ui/icons/LocationOn';
import Mail from '@material-ui/icons/Mail';
import Call from '@material-ui/icons/Call';
import Facebook from '@material-ui/icons/Facebook';
import Fab from '@material-ui/core/Fab';
import Direction from '../assets/Direction.jpg';

const styles = theme => ({
    btnroot: {
        '& > *': {
            margin: theme.spacing(1),
          },
        textAlign:'center',
      },
    root: {
        maxWidth: 360,
        margin:'auto',
        textAlign:'center'
      },
      media: {
        height: 275,
      },
});

class Location extends React.Component {
  
  render() {
    const { className, classes, data } = this.props;

    return (
      <div className={className}>
        <Card className={classes.root}>
      <CardActionArea>
        <img src={Direction} alt="" style={{height:'250px'}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Address
          </Typography>
          <Typography variant="h6" component="p" >
            Bharathi Vidyalaya Nursery &amp; <br/>Primary School 
            Kulipatty<br/>
            Dindigul 624 005<br/>
            Contact +91 {data.mobNumber}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <br/>
    <div className={classes.btnroot}>
    <Fab color="primary" aria-label="mail" onClick={()=>window.location.href = `mailto:${data.email}`}>
        <Mail />
    </Fab>
    <Fab color="primary" aria-label="phone" onClick={()=>window.location.href = `tel:${data.mobNumber}`}>
        <Call />
    </Fab>
    <Fab color="primary" aria-label="fb" onClick={()=>window.open(data.facebook)}>
        <Facebook />
    </Fab>
    <Fab color="primary" aria-label="location" onClick={()=>window.open(data.location)}>
        <LocationOn />
    </Fab>
    </div>
      </div>
    );
  }
}

Location.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default withStyles(styles)(Location);
