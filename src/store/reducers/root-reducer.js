import {combineReducers} from "redux";
import data from './data/data';
import application from './application/application';
import user from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  APPLICATION: `APPLICATION`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APPLICATION]: application,
  [NameSpace.USER]: user,
});
