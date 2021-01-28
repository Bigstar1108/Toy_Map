import React from 'react';
import {useMapEvents, Polygon} from 'react-leaflet';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {addMarkerData} from '../modules/zone/markerData';
import CustomMarker from './customMarker';

const Markers = () => {
    const dispatch = useDispatch();
    const {zoneMenu, setIndex} = useSelector((state: RootStateOrAny) => state.zoneMenu);
    const {markerData} = useSelector((state:RootStateOrAny) => state.markerData);

    const checkIndex = zoneMenu.findIndex((item:any) => item.id === setIndex);

    const map = useMapEvents({
      click(e){
        const coords = e.latlng;
        dispatch(addMarkerData({lat: coords.lat, lng: coords.lng}));
      }
    })

    return <>
    {markerData.map((item:any, index:number) => (
      <CustomMarker key = {index} position = {item} colorCode = {zoneMenu[checkIndex].colorCode} index = {index} />
    ))}
    <Polygon fill = {false} positions = {markerData} color = {`#${zoneMenu[checkIndex].colorCode}`} />
    </>;
}

export default Markers;