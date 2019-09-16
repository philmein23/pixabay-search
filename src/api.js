const API_KEY = "13136421-266c28a6d61717bc2e4e6a83e";
const URI = "https://pixabay.com/api/";
const PER_PAGE = 10;

export async function getImages({ searchTerm = "", categoryFilter = "" }) {
  let encoded = encodeURI(trimWhitespace(searchTerm));
  let queryParams = `?key=${API_KEY}&per_page=${PER_PAGE}&q=${encoded}&category=${categoryFilter}`;
  let result = await fetch(`${URI}/${queryParams}`);

  let data = await result.json();

  return augmentDataset(data.hits);
}

function augmentDataset(dataset) {
  return dataset.map(item => {
    item.isSaved = false;
    return item;
  });
}

function trimWhitespace(term) {
  return term.trim().toLowerCase();
}
