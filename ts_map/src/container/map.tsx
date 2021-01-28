import React, { useEffect, useState } from 'react';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {MapContainer, TileLayer, useMapEvents, Marker} from 'react-leaflet';
import { getCenterPosition } from '../modules/position/getCenter_action';
import {addMarkerData} from '../modules/zone/markerData';
import Loading from '../components/loading';

const CSS = () => {
  return `
    .leaflet-container{
      height: 100%;
      width: 100%;
    }
  `;
}

const SimpleMapContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  background-color: #292929;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SimpleMap = () => {
    const dispatch = useDispatch();
    const {position, isLoading} = useSelector((state: RootStateOrAny) => state.getCenter);
    const {markerData} = useSelector((state:RootStateOrAny) => state.markerData);

    const [zoom, setZoom] = useState(13);
    const [minZoom, setMinZoom] = useState(3);
    
    useEffect(() => {
      dispatch(getCenterPosition());
    }, [dispatch]);

    const Markers = () => {
      const map = useMapEvents({
        click(e){
          const coords = e.latlng;
          dispatch(addMarkerData({lat: coords.lat, lng: coords.lng}));
        }
      })

      return (markerData.map((item:any, index:number) => (
        <Marker key = {index} position = {item} />
      )));
    }

    return(
      <>
      <style>{CSS()}</style>
      <SimpleMapContainer>
        {
          isLoading ? <Loading /> : 
          <MapContainer center={position} zoom={zoom} scrollWheelZoom={true} minZoom = {minZoom} >
            <Markers />
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        }
      </SimpleMapContainer>
      </>
    )
}

export default SimpleMap;