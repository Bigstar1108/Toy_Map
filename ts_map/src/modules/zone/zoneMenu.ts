import {createSlice} from '@reduxjs/toolkit';

const ZoneMenu = createSlice({
    name: 'ZoneMenuReducer',
    initialState: {zoneMenu: [], setIndex: undefined},
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
        setZoneIndex: (state:any, action) => {
            if(state.setIndex === undefined){
                state.setIndex = action.payload;
            }else if(state.setIndex === action.payload){
                state.setIndex = undefined;
            }
        }
    }
});

export default ZoneMenu.reducer;

export const {addZoneMenu, removeZoneMenu, setZoneIndex} = ZoneMenu.actions;