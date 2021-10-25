import { combineReducers} from 'redux';
import searchBarReducer from './SearchBar';
import bookDetailsReducer from './BookDesc';
import itemReducer from './asyncItemReducer';


const rootReducer = combineReducers({
    searchBarReducer,
    bookDetailsReducer,
    itemReducer
})
export default rootReducer;