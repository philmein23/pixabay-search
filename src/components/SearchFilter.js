import React from "react";
import { CATEGORIES } from "../constants";
import { sortData } from "../utils";

export default function SearchFilter({
  searchTerm,
  handleSearchTerm,
  categoryFilter,
  handleCategoryFilter,
  performSearch,
  clearSearch
}) {
  return (
    <section className="search-filter">
      <form>
        <div>
          <label htmlFor="search">Search</label>
          <input
            id="search"
            type="text"
            placeholder="Keyword..."
            value={searchTerm}
            onChange={handleSearchTerm}
          />
        </div>
        <div>
          <label>Category</label>
          <select value={categoryFilter} onChange={handleCategoryFilter}>
            <option>Filter by Category</option>
            {sortData(CATEGORIES).map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button onClick={performSearch} className="search-button">
            Search
          </button>
        </div>
        <div className="center">
          <button onClick={clearSearch} className="clear-search-button">
            Clear
          </button>
        </div>
      </form>
    </section>
  );
}
