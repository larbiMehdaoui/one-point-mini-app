import { combineReducers } from 'redux'
import AddElementReducer from "../reducers/add-element";

export default combineReducers({
    dataList: AddElementReducer
})

