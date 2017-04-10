//state argument is not application state, only the state,
//this reducer is reposible for i.e it takes in the state
//data as arguments which it itself previously created.
export default function (state = null, action){
    //if the argument 'state' is undefined, set it to null
    switch (action.type){
        case "BOOK_SELECTED";
        return action.payload;
    }
    return state
}