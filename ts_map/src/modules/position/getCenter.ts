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

const {startGetCenter, hasError, getCenterSuccess} = Center.actions;

export const getCenterPosition = () => async (dispatch: any) => {
    dispatch(startGetCenter());
    try{
        navigator.geolocation.getCurrentPosition((position) => {
            const center = {lat: position.coords.latitude, lng: position.coords.longitude};
            dispatch(getCenterSuccess(center));
        })
    }catch(e){
        dispatch(hasError(e));
    }
}