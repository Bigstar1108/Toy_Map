import {combineReducers} from '@reduxjs/toolkit';

import getCenter from './position/getCenter';
import zoneMenu from './zone/zoneMenu';
import markerData from './zone/markerData';
import zonePosition from './zone/zonePosition';

export const rootReducer = combineReducers({
    getCenter,
    zoneMenu,
    markerData,
    zonePosition
});
