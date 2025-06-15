import React, { useState } from 'react';

function GenrateImg() {
  // Initialize with a default image
  const [imageUrl, setImageUrl] = useState(
    'https://picsum.photos/seed/initial/300/200'
  );

  // Generate a new random seed and update the URL
  const generateImages = () => {
    const seed = Math.floor(Math.random() * 10000);
    setImageUrl(`https://picsum.photos/seed/${seed}/300/200`);
  };

  return (
    <div className="container d-flex flex-col align-items-center">
      <div className="mb-3">
        <img src={imageUrl} alt="Random" />
      </div>
      <button
        className="btn btn-outline-success"
        onClick={generateImages}
      >
        Generate Image
      </button>
    </div>
  );
}

export default GenrateImg;
