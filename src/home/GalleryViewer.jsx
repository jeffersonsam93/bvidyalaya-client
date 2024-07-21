import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import GrainIcon from '@material-ui/icons/Grain';
import ImageViewer from './ImageViewer';

export default function GalleryViewer(props) {
    const {event,setEvent,photos}=props;
    function handleClick(event) {
        event.preventDefault();
        setEvent('');
    }
  return (
    <div>
        <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
            <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
            href="/"
            onClick={handleClick}
            >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Gallery
            </Link>
            <Typography
            sx={{ display: 'flex', alignItems: 'center' }}
            color="text.primary"
            >
            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {event}
            </Typography>
        </Breadcrumbs>
        </div>
        <ImageViewer photos={photos}/>
    </div>
  );
}