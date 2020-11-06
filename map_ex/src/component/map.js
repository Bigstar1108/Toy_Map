import React from 'react';
import { Map, TileLayer, Marker, Polygon } from 'react-leaflet';

function CSS() {
    return `
    .leaflet-container {
        height: 100%;
        width: 100%;
    }
    `;
}

class SimpleMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 0,
                lng: 0,
            },
            markerData: [],
            zoom: 13,
            zonePosition: [],
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.zoneIndex !== this.props.zoneIndex) {
            this.setState({ markerData: [] });
        }
    }

    getCenterPosition() {
        const { center } = this.state;
        navigator.geolocation.getCurrentPosition((position) => {
            center.lat = position.coords.latitude;
            center.lng = position.coords.longitude;

            this.setState({
                center: center,
            });

            this.props.setLoading();
        });
    }

    addMarker = (event) => {
        const { markerData } = this.state;
        const coords = event.latlng;

        this.setState({
            markerData: [...markerData, coords],
        });

        this.updateZonePosition();
    };

    updateMarker = (event) => {
        const latlng = event.target.getLatLng();
        const markerIndex = event.target.options.marker_index;

        this.setState((prevState) => {
            const markerData = [...prevState.markerData];
            markerData[markerIndex] = latlng;

            return { markerData: markerData };
        });

        this.updateZonePosition();
    };

    updateZonePosition = () => {
        const { markerData, zonePosition } = this.state;

        zonePosition[this.props.zoneIndex] = markerData;

        this.setState({
            zonePosition: zonePosition,
        });
    };

    componentDidMount() {
        this.getCenterPosition();
    }

    render() {
        const { center, zoom, zonePosition } = this.state;
        const position = [center.lat, center.lng];

        return (
            <>
                <style>{CSS()}</style>
                {center.lat === 0 || center.lng === 0 ? (
                    <>
                        <span>
                            지도를 로딩중입니다!
                            <br />
                            조금만 기다려주세요😊
                        </span>
                        <span>지도가 로딩이 안된다면 위치 허용을 확인해 주세요!</span>
                    </>
                ) : (
                    <>
                        <Map center={position} zoom={zoom} onclick={this.props.zoneIndex === undefined ? null : this.addMarker}>
                            <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
                            {zonePosition.map((el, index) => (
                                <>
                                    {el.map((el, index) => (
                                        <Marker key={index} marker_index={index} position={el} draggable={this.props.zoneIndex === undefined ? false : true} ondragend={this.updateMarker} />
                                    ))}
                                    <Polygon positions={el} color={this.props.ZoneInfo[index].colorCode} fill={false} ref={this.polygonRef} />
                                </>
                            ))}
                        </Map>
                    </>
                )}
            </>
        );
    }
}

export default SimpleMap;
