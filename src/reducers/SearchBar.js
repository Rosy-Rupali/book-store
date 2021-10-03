const initialState = {
    searchData: "",
}

const searchBarReducer = (state = initialState, action) => {
    console.log(action.type);
    switch(action.type){
        case "Search":
            return{
                searchData: action.searchData,
            };
            default:
                return state;
    }
}
export default searchBarReducer;