const initialData = {
//   bookId: "",
//   title: "",
//   author: "",
//   price: "",
//   genre: "",
  bookData: [
    {
      bookId: 1,
      title: "The Harry Potter and the Philosopher's Stone",
      author: "J.K Rowling",
      genre: "Fantasy",
      price: 12.99,
    },
    {
      bookId: 2,
      title: "The Half GirlFriend",
      author: "Chetan Bhagat",
      genre: "Romance",
      price: 12.99,
    },
  ],
};

export const books = (state = initialData, action) => {
  switch (action.type) {
    case "BOOK_ID":
      return {
        ...state,
        bookId: action.payload,
      };
    case "BOOK_TITLE":
      return {
        ...state,
        title: action.payload,
      };

    case "AUTHOR":
      return {
        ...state,
        author: action.payload,
      };
    case "GENRE":
      return {
        ...state,
        genre: action.payload,
      };
    case "PRICE":
      return {
        ...state,
        price: action.payload,
      };
    case "ADD_BOOKS":
      return {
        ...state,
        bookData: [
          ...state.bookData, action.payload],
          bookId: "",
          title: "",
          author: "",
          price: "",
          genre: "",
      };

    default:
      return state;
  }
};
