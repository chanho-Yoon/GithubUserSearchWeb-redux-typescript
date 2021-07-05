import { combineReducers } from 'redux';
import users from './users';
import tabs from './tabs';
import favorites from './favorites';

const rootReducer = combineReducers({ users, favorites, tabs });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
