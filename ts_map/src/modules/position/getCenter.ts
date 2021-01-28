import {createSlice} from '@reduxjs/toolkit';

const Center = createSlice({
    name: 'CenterReducer',
    initialState: {position: {lat: 0, lng: 0}, isLoading: false, error: false},
    reducers: {
        startGetCenter: state => {
            state.isLoading = true;
        },
        hasError: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        getCenterSuccess: (state, action) => {
            state.position.lat = action.payload.lat;
            state.position.lng = action.payload.lng;
            state.isLoading = false;
        }
    }
});

export default Center.reducer;

export const {startGetCenter, hasError, getCenterSuccess} = Center.actions;