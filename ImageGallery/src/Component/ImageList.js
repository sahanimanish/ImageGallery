import './imagelist.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
  const Images = props.Images.map(image => {
    return <ImageCard
      key={image.id}
      Images={image}
    />
  });

  return < div className="image-list" > {Images}</div >

}

export default ImageList;