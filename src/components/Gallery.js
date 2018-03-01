import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'http://www.colours.co.tz/wp-content/uploads/2014/04/placeholder4.png',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://www.colours.co.tz/wp-content/uploads/2014/04/placeholder4.png',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://www.colours.co.tz/wp-content/uploads/2014/04/placeholder4.png',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://www.colours.co.tz/wp-content/uploads/2014/04/placeholder4.png',
    title: 'Morning',
    author: 'fancycrave1',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Gallery = () => (
  <div className="container">
    <GridList
      cellHeight={300}
    >
      <Subheader>Gallery</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Gallery;
