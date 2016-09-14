import React from 'react';
import ProgressiveImage from './progressive-image';

const App = () => {
  const lowQualityImage = 'https://mosaic02.ztat.net/nvg/media/catalog/DR/12/1N/00/4K/12/DR121N004-K12@14.jpg';
  const highQualityImage = 'https://mosaic02.ztat.net/nvg/media/original/DR/12/1N/00/4K/12/DR121N004-K12@14.jpg';
  return (
    <div className="row">
      <div className="col-md-3">.col-md-4</div>
      <div className="col-md-6">
        <h1>Hello, world.</h1>
        <ProgressiveImage
          placeholder={lowQualityImage}
          src={highQualityImage}
        />
      </div>
      <div className="col-md-3">.col-md-4</div>
    </div>
  );
};

export default App;
