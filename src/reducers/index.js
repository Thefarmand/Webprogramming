import { combineReducers } from 'redux';
import DriverReducer from './DriverReducer';
import ConstructorReducer from './ConstructorReducer';
import RaceReducer from './RaceReducer';
import DriverLastResultReducer from './DriverLastResultReducer';

export default combineReducers ({
    drivers: DriverReducer,
    constructors: ConstructorReducer,
    races : RaceReducer,
    driverLastResult : DriverLastResultReducer
});