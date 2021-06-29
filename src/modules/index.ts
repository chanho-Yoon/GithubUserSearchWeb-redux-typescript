import {combineReducers} from 'redux'
import users from './users';
import tabs from "./tabs";

const rootReducer = combineReducers({users, tabs})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>