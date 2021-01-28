import React from 'react';
import {Marker} from 'react-leaflet';
import {divIcon} from 'leaflet';

interface CustomMarkerType{
    position: any;
    colorCode: string;
    index: number;
}

const CustomMarker: React.FC<CustomMarkerType> = ({position, colorCode, index}) => {
    const markHtmlStyle = `
        background-color: #${colorCode};
        width: 1.5rem;
        height: 1.5rem;
        display: block;
        left: -0.8rem;
        top: -0.3rem;
        position: relative;
        border-radius: 3rem 3rem 0;
        transform: rotate(45deg);
        border: 1px solid #FFFFFF
    `;

    const customIcon = divIcon({
        className: "custom-marker",
        iconAnchor: [0, 24],
        popupAnchor: [0, -36],
        html: `<span style="${markHtmlStyle}" />`
    })

    return <Marker key = {index} icon = {customIcon} position = {position} />
}

export default CustomMarker;