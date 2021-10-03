import {createStore} from 'redux'
import rootReducer from '../reducers/CombineReducer.js'


const store = createStore(rootReducer);
export default store;