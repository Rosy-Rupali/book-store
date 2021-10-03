const initialState = {
    bookData: "",
}

const bookDetailsReducer = (state=initialState, action) => {
console.log(action.type)
switch(action.type){
    case "BookDetails":
        return{
            bookData: action.bookData,
        }
        default:
            return state;
    }
}
export default bookDetailsReducer;