import {combineReducers} from '@reduxjs/toolkit';

import {Center} from './position/getCenter';

export const rootReducer = combineReducers({
    Center: Center.reducer
});
