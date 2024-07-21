import React from 'react';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { makeStyles } from '@material-ui/core/styles';
import GalleryViewer from './GalleryViewer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    height: '100%',
    overflowY: 'unset'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  }));
  const GalleryDir = (props) => {
    const classes = useStyles();
    const [event,setEvent]=React.useState('');
    const [photos,setPhotos]=React.useState([]);
    const {data}=props;
    console.log(data)
    return (
      event ? <GalleryViewer event={event} photos={photos} setEvent={setEvent}/>:<div className={classes.root}>
      <GridList cellHeight={70} className={classes.gridList} spacing={20}>
      <Grid container spacing={4} style={{width:'100%',height:'100%'}}>
      {data && data.events ? data.events.map((event) => (
        <Grid item xs={12} sm={4} md={3}>
            <GridListTile key={event.event_name} style={{cursor:'pointer'}} onClick={()=> {
                setEvent(event.event_name);
                setPhotos(event.photos);
              }}
            >
              <div style={{width:'100%'}}>
                <img style={{width:'100%',maxHeight:'250px'}} src={event.cover_pic} alt={event.event_name} />
              </div>
              <GridListTileBar style={{textAlign:'center'}}
                title={event.event_name}
                subtitle={<span>{event.event_date}</span>}
              />
            </GridListTile>
        </Grid>
      )):''}
      </Grid>
      </GridList>
    </div>
    );
}

export default GalleryDir;