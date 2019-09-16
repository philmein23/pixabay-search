import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";
import SearchFilter from "./components/SearchFilter";
import ImageListing from "./components/ImageListing";
import SavedImages from "./components/SavedImages";
import { getImages } from "./api";
import { initialState, reducer } from "./reducer";

import "./styles.css";

function App() {
  let [searchTerm, setSearchTerm] = useState("");
  let [categoryFilter, setCategory] = useState("");
  let [state, dispatch] = useReducer(reducer, initialState);

  function performSearch() {
    dispatch({ type: "FETCHING" });

    getImages({ searchTerm, categoryFilter })
      .then(images => {
        dispatch({ type: "SUCCESS", images });
      })
      .catch(reason => {
        dispatch({ type: "ERROR" });
        console.error(reason);
      });
  }

  function handleSearchTerm(e) {
    let value = e.target.value;
    setSearchTerm(value);
  }

  function handleCategoryFilter(e) {
    let value = e.target.value;
    setCategory(value);
  }

  function clearSearch() {
    setSearchTerm("");
  }

  function sendAsProps() {
    return {
      searchTerm,
      performSearch,
      handleSearchTerm,
      categoryFilter,
      handleCategoryFilter,
      clearSearch
    };
  }

  function handleSaveImage(image) {
    return function() {
      if (!image.isSaved) {
        image.isSaved = true;

        dispatch({ type: "SAVE_IMAGE", savedImage: image });
      } else {
        return;
      }
    };
  }

  if (state.loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container">
      <header className="header-container">
        <h1 className="title">Pixabay</h1>
      </header>
      <SearchFilter {...sendAsProps()} />
      <SavedImages savedImages={state.savedImages} />
      <ImageListing images={state.images} handleSaveImage={handleSaveImage} />
    </main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
