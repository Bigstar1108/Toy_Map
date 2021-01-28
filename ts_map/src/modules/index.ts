import {combineReducers} from '@reduxjs/toolkit';

import getCenter from './position/getCenter';
import zoneMenu from './zone/zoneMenu';

export const rootReducer = combineReducers({
    getCenter,
    zoneMenu
});
