import {createSlice} from '@reduxjs/toolkit';

const MarkerData = createSlice({
    name: 'MarkerData',
    initialState: {markerData: []},
    reducers: {
        addMarkerData: (state: any, action) => {
            state.markerData.push(action.payload);
        },
        clearMarkerData: (state: any) => {
            state.markerData = [];
        },
    }
});

export default MarkerData.reducer;

export const {addMarkerData, clearMarkerData} = MarkerData.actions;