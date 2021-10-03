import { combineReducers} from 'redux';
import searchBarReducer from './SearchBar';
import bookDetailsReducer from './BookDesc';


const rootReducer = combineReducers({
    searchBarReducer,
    bookDetailsReducer,
})
export default rootReducer;