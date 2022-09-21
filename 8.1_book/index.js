const bookObj = {
  bookName: "Catcher in the rie",
  bookAuthor: "J.D. Salinger",
  publishYear: "1951",
  deweyDecimal: 813.54,
};

const func = (bookObj) => {
  return `The book ${bookObj.bookName} was written by ${bookObj.bookAuthor} in the year ${bookObj.publishYear}`;
};

func(bookObj);
