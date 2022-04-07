
export function booksId (payload){
  return {
    type: "BOOK_ID",
    payload: payload
  };
}

export function booksTitle (payload){
  return {
    type: "BOOK_TITLE",
    payload: payload
  };
}
export function author (payload){
  return {
    type: "AUTHOR",
    payload: payload
  };
}
export function genre (payload){
    return {
        type: "GENRE",
        payload: payload
    };
    }
export function price (payload){
    return {
        type: "PRICE",
        payload: payload
    };
}
export function addBooks (payload){
    return {
        type: "ADD_BOOKS",
        payload: payload
    };
}