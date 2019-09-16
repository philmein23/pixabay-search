import React from "react";
import { ID, convertToItemList } from "../utils";

export default function ImageListing({ images, handleSaveImage }) {
  return (
    <section className="search-results">
      <div className="image-listing-container">
        {images &&
          images.map(image => (
            <ImageListItem
              key={ID()}
              image={image}
              handleSaveImage={handleSaveImage}
            />
          ))}
      </div>
    </section>
  );
}

function ImageListItem({ image, handleSaveImage }) {
  return (
    <div className="image-details">
      <div className="content" onClick={handleSaveImage(image)}>
        <div className="content-overlay" />
        <img src={image.webformatURL} alt={`img-${ID()}`} />
        <div className="content-details">
          {image.isSaved ? "Saved" : "Click to Save Image"}
        </div>
      </div>
      <div>
        <div>
          {image.tags &&
            convertToItemList(image.tags).map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
        </div>
        <div className="likes-favs-container">
          <span className="likes">
            <span>{image.likes}</span> Likes
          </span>
          <span className="favorites">
            <span>{image.favorites}</span> Favorites
          </span>
        </div>
      </div>
    </div>
  );
}
