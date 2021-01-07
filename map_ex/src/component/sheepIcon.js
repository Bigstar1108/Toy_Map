import { icon, divIcon } from 'leaflet';

// const shipIcon = icon({
//     iconUrl: '/img/map/ship_icon.svg',
//     iconSize: [42, 179],
//     iconAnchor: [22, 94],
//     shadowUrl: '/img/map/shipicon1.svg',
//     shadowSize: [68, 95],
//     shadowAnchor: [35, 74],
// });

const drawIcon = (zoomLevel) => {
    const shipIcon = divIcon({
        iconSize: [50, 50],
        iconAnchor: [50, 50],
        html: `
        <img
            style="transform: rotate(180deg);"
            height="100%"
            width="100%"
            src='/img/map/ship_icon.svg'>
        `,
    });

    return shipIcon;
};

export { shipIcon };
