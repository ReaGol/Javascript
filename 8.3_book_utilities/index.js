const bookObj1 = {
  bookName: "Catcher in the rie",
  bookAuthor: "J.D. Salinger",
  publishYear: "1951",
};

const bookObj2 = {
  bookName: "Little Women",
  bookAuthor: "Louisa May Alcott",
  publishYear: "1868",
};

const bookUtils = {
  getFirstPublished: (book1, book2) => {
    if (book1.publishYear < book2.publishYear) {
      return book1;
    } else {
      return book2;
    }
  },

  setNewEdition: (book, year) => {
    book.latestEdition = year;
  },

  setLanguage: (book, lang) => {
    book.originLanuage = lang;
  },

  setTranslation: (book, lang, translator) => {
    book.translation = { translator, lang };
  },
};
bookUtils.getFirstPublished(bookObj1, bookObj2);
bookUtils.setNewEdition(bookObj1, 1979);
bookUtils.setLanguage(bookObj1, "English");
bookUtils.setTranslation(bookObj1, "Hebrew", "Gutman");
console.log(bookObj1, bookObj2);
