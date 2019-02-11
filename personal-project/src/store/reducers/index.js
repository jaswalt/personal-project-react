import { combineReducers } from 'redux';
import repos from './repoReducer';
import prs from './prsReducer';

export const rootReducer = combineReducers({
  repos,
  prs,
});