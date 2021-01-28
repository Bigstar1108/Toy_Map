import {createSlice} from '@reduxjs/toolkit';

const ZoneMenu = createSlice({
    name: 'ZoneMenuReducer',
    initialState: {zoneMenu: []},
    reducers: {
        addZoneMenu: (state: any) => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            state.zoneMenu.push({
                id: Date.now(),
                colorCode: randomColor
            });
        },
        removeZoneMenu: (state:any, action) => {
            const result = state.zoneMenu.filter((list:any) => list.id !== action.payload);
            state.zoneMenu = result;
        },
    }
});

export default ZoneMenu.reducer;

export const {addZoneMenu, removeZoneMenu} = ZoneMenu.actions;