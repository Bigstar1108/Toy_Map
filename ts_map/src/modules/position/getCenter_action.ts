import {startGetCenter, getCenterSuccess, hasError} from './getCenter';

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