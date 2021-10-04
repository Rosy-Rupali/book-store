import { combineReducers} from 'redux';
import searchBarReducer from './SearchBar';
import bookDetailsReducer from './BookDesc';
import cartCountReducer from './Cart.js';

const rootReducer = combineReducers({
    searchBarReducer,
    bookDetailsReducer,
    cartCountReducer
})
export default rootReducer;