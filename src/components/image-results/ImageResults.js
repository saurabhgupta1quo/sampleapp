import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Card  from 'material-ui/Card';
import CardHeader from 'material-ui/Card/CardHeader'

class ImageResults extends Component {
  state = {
    open: false,
    currentImg: ''
  };

  handleOpen = img => {
    this.setState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  

  render() {
    let imageListContent;
    const { images } = this.props;


    if (images) {
      imageListContent = (
        <GridList cols={5}>
          {images.map(img => (
            <GridTile
              title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                  <ZoomIn color="white" />
                </IconButton>
              }
            >
              <img src={img.largeImageURL} alt="" />
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }

    const actions = [
      <FlatButton label="Close" primary={true} onClick={this.handleClose} />
    ];

    return (
       <div>
        <Card style={{ width: "100%" }}>
        {imageListContent}
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
            <Card style={{ width: "100%" }}>
            <CardHeader tag="h3"></CardHeader>
            <img src={this.state.currentImg} alt="" style={{ width: '100%' }} />
            </Card>
        </Dialog>
        </Card>
      </div>
    );
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageResults;