import forks from './forks';
import desserts from './desserts';
import vegetables from './vegetables';
import screen from './screens';
import { combineReducers } from 'redux';

export default combineReducers({ forks, desserts, vegetables, screen });