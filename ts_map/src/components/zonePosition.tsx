import React from 'react';
import {RootStateOrAny, useSelector} from 'react-redux';
import {Polygon} from 'react-leaflet';
import CustomMarker from './customMarker';

const ZonePositionDraw = () => {
    const {zonePosition} = useSelector((state:RootStateOrAny) => state.zonePosition);
    const {zoneMenu} = useSelector((state: RootStateOrAny) => state.zoneMenu);

    return <>
        {
            zonePosition.map((zone: any, zoneIndex: number) => (
                <>
                {
                    zone.map((position: any, index: number) => (
                        <CustomMarker key = {index} colorCode = {zoneMenu[zoneIndex].colorCode} position = {position} index = {index} />
                    ))
                }
                <Polygon key = {zoneIndex} fill = {false} positions = {zone} color = {`#${zoneMenu[zoneIndex].colorCode}`} />
                </>
            ))
        }
    </>;
}

export default ZonePositionDraw;