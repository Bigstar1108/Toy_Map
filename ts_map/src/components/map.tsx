import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import {MapContainer, TileLayer} from 'react-leaflet';
import {LatLngExpression} from 'leaflet';
import { getCenter } from '../modules/position/getCenter';

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
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SimpleMap = () => {
    const dispatch = useDispatch();

    const position: LatLngExpression = [51.505, -0.09];
    const zoom:number = 13;

    useEffect(() => {
      dispatch(getCenter(''));
    });

    return(
      <>
      <style>{CSS()}</style>
      <SimpleMapContainer>
        <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </SimpleMapContainer>
      </>
    )
}

export default SimpleMap;