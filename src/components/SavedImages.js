import React from "react";

export default function SavedImages({ savedImages }) {
  return (
    <section className="saved-images-container">
      <div>Saved({savedImages.length})</div>
      {savedImages.map((image, index) => (
        <SavedImageItem key={index} image={image} />
      ))}
    </section>
  );
}

function SavedImageItem({ image }) {
  return (
    <a className="saved-image-link" href={image.webformatURL}>
      {image.id}
    </a>
  );
}
