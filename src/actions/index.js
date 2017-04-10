export function selectBook(book){
    //selectBook is an action creator-a simple function, that
    //returns an action, which is
    //an object with a type property
   return {
        type: "BOOK_SELECTED",
        payload: book
   }
}