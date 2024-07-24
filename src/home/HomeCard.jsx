import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions"; 
//import Avatar from "material-ui/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Location from "./Location";
import Contact from "./Contact";
import SlidePhoto from "./SlidePhoto";
import GalleryDir from "./Gallery";

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    height: "100%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  cardhead:{
    textAlign:'center',
    color: theme.palette.secondary.main,
    fontSize:'32px'
  },
  para: {
    paddingTop: "10px",
    textAlign: "justify"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const HomeCard = (props) => {
  const classes = useStyles();
  const { className, data } = props;

  return (
    <div id={data.id} className={className} style={{paddingTop:'72px',marginTop:'-72px'}}>
      <Card className={classnames(className, classes.card)}>
        <CardHeader
          // avatar={
          //   <Avatar aria-label="Recipe" className={classes.avatar}>
          //    R
          //   </Avatar>
          // }
          className={classes.cardhead}
          title={data.name}
          subheader={data.description}
          titleTypographyProps={{className:classes.cardhead}}
        />
        {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          {data.paras.map((par, idx) => {
            return (
              <Typography key={idx} component="p" className={classes.para} dangerouslySetInnerHTML={{__html: par}}>
              </Typography>
            );
          })}
          {
            data.id==='wea'?<Location data={data.data}/>:data.id==='ctu'?<Contact data={data.data}/>:data.id==='wwa'?<SlidePhoto data={data}/>:data.id==='gallery'?<GalleryDir data={data.data}/>:''
          }
        </CardContent>
      </Card>
    </div>
  );
}

HomeCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default HomeCard;
