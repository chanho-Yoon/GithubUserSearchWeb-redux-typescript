import { combineReducers } from 'redux';
import users from './users';
import tabs from './tabs';
import favorites from './favorites';
import search from './search';

const rootReducer = combineReducers({ users, favorites, search, tabs });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
