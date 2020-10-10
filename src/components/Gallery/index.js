import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/small/commercial/0.jpg';

function Gallery(props) {
  const currentCategoy = {
    name: 'commercial',
    description:
      'photos of grocery stores, food trucks, and other commercial projects',
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategoy.name)}</h1>
      <p>{currentCategoy.description}</p>
      <div>
        <img
          src={photo}
          alt="commercial example"
          className="img-thumbnail mx-1"
        ></img>
      </div>
    </section>
  );
}

export default Gallery;
