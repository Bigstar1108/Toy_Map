import {combineReducers} from '@reduxjs/toolkit';

import getCenter from './position/getCenter';

export const rootReducer = combineReducers({
    getCenter
});
