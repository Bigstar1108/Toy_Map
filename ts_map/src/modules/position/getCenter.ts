import {createSlice} from '@reduxjs/toolkit';

const getCenterPosition = () => {
    const center = {lat: 0, lng: 0};

    navigator.geolocation.getCurrentPosition((position) => {
        center.lat = position.coords.latitude;
        center.lng = position.coords.longitude;

        console.log(`Your location is Here!\n-> lat: ${center.lat}, lng: ${center.lng} <-`);

        return center;
    });
}

export const Center = createSlice({
    name: 'CenterReducer',
    initialState: {},
    reducers: {
        getCenter: (state, action) => getCenterPosition(),
    }
});

export const {getCenter} = Center.actions;