import React from 'react';
import Grid from '@material-ui/core/Grid';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { makeStyles } from '@material-ui/core/styles';
import GalleryViewer from './GalleryViewer';
import { getEntrywithEntryId } from '../contentstack/contentstack';

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
      <ImageList rowHeight={70} className={classes.gridList} gap={20}>
      <Grid container spacing={4} style={{width:'100%',height:'100%',margin:'0px'}}>
      {data && data.events ? data.events.map((event, idx) => (
        <Grid key={idx} item xs={12} sm={4} md={3}>
            <ImageListItem key={event.event_name} style={{cursor:'pointer'}} onClick={()=> {
                jstag.send({
                  event: 'image_click',
                  category: event.event_name,
                  action: 'event_selected',
                  label: 'Photo',
                });
                getEntrywithEntryId({
                  contentTypeUid:'photos',
                  entryId:event.photo_entry_id
                }).then((res)=>{
                  const eventPhotos=res.event_photos.map((photo)=>{
                    return {original:photo.url, thumbnail:photo.url, thumbnailHeight: "50 px"}
                  })
                  setEvent(event.event_name);
                  setPhotos(eventPhotos);
                }).catch((err)=>{
                  console.log(err);
                })
              }}
            >
              <div style={{width:'100%'}}>
                <img style={{width:'100%',height:'22vh'}} src={event.cover_pic} alt={event.event_name} />
              </div>
              <ImageListItemBar style={{textAlign:'center'}}
                title={event.event_name}
                subtitle={<span>{event.event_date}</span>}
              />
            </ImageListItem>
        </Grid>
      )):''}
      </Grid>
      </ImageList>
    </div>
    );
}

export default GalleryDir;