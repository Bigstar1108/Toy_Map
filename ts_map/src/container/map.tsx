import React, { useEffect } from 'react';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {MapContainer, TileLayer} from 'react-leaflet';
import { getCenterPosition } from '../modules/position/getCenter_action';
import Loading from '../components/loading';
import Markers from '../components/marker';
import ZonePositionDraw from '../components/zonePosition';

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
    const {setIndex} = useSelector((state: RootStateOrAny) => state.zoneMenu);
    const {zonePosition} = useSelector((state:RootStateOrAny) => state.zonePosition);

    const zoom = 13;
    const minZoom = 3;
    
    useEffect(() => {
      dispatch(getCenterPosition());
    }, [dispatch]);

    return(
      <>
      <style>{CSS()}</style>
      <SimpleMapContainer>
        {
          isLoading ? <Loading /> : 
          <MapContainer center={position} zoom={zoom} scrollWheelZoom={true} minZoom = {minZoom} >
            {
              setIndex === undefined ? '' : <Markers />
            }
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            {
              zonePosition.length === 0 ? '' : <ZonePositionDraw />
            }
          </MapContainer>
        }
      </SimpleMapContainer>
      </>
    )
}

export default SimpleMap;