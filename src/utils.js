export function ID() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}

export function sortData(dataset) {
  dataset.sort((a, b) => {
    if (a > b) {
      return 1;
    }

    if (b > a) {
      return -1;
    }
  });

  return dataset;
}

export function convertToItemList(dataset) {
  return dataset.split(",");
}
