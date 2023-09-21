import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { makeStyles } from '@material-ui/core/styles';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: '100%',
    overflowY: 'unset'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  }));
  const SlidePhoto = (props) => {
    const classes = useStyles();
      const [value, setValue] = React.useState('female');
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    const {data}=props;
    return (
      <div className={classes.root}>
      <GridList cellHeight={380} className={classes.gridList} spacing={20}>
      <Grid container spacing={2} style={{width:'100%',height:'100%'}}>
      {data.tileData.map((tile) => (
        <Grid item xs={12} sm={6}>
        <ScrollAnimation animateIn={tile.animationIn} animateOut={tile.animationOut} animatePreScroll={false} animateOnce={true} duration={2}>
            <GridListTile key={tile.img}>
              <div style={{width:'100%'}}>
                <img style={{width:'100%',height:'380px'}} src={tile.img} alt={tile.name} />
              </div>
              <GridListTileBar style={{textAlign:'center'}}
                title={tile.name}
                subtitle={<span>{tile.detail}</span>}
              />
            </GridListTile>
        </ScrollAnimation>
        </Grid>
      ))}
      </Grid>
      </GridList>
    </div>
    );
}

export default SlidePhoto;