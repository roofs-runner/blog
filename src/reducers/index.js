import {combineReducers} from "redux";
import reduceWeather from './reducerWeather';

const rootReducer = combineReducers({
  weather: reduceWeather
});

export default rootReducer;