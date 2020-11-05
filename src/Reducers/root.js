import forks from './forks';
import desserts from './desserts';
import vegetables from './vegetables';
import score from './score';
import screen from './screens';
import { combineReducers } from 'redux';

export default combineReducers({ desserts, forks, score, screen, vegetables });