import {createSlice} from '@reduxjs/toolkit';

const ZonePosition = createSlice({
    name: 'ZonePosition',
    initialState: {zonePosition: []},
    reducers: {
        addZonePosition: (state: any, action) => {
            state.zonePosition[action.payload.index] = action.payload.position;
        },
        removeZonePosition: (state: any, action) => {
            const result = state.zonePosition.filter((list:any, index: number) => index !== action.payload.checkIndex);
            state.zonePosition = result;
        }
    }
});

export default ZonePosition.reducer;

export const {addZonePosition, removeZonePosition} = ZonePosition.actions;