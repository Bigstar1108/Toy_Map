import React, { createRef } from 'react';
import { Map, TileLayer } from 'react-leaflet';

function CSS() {
    return `
    .leaflet-container {
        height: 100%;
        width: 100%;
    }
    `;
}

class SimpleMap extends React.Component {
    state = {
        lat: 0,
        lng: 0,
        zoom: 13,
    };

    getCenterPosition() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
        });
    }

    mapRef = createRef();

    componentDidMount() {
        this.getCenterPosition();
    }

    handleClick = () => {
        console.log('Click');
        const map = this.mapRef.current;
        if (map != null) {
            console.log(map.leafletElement.locate());
            map.leafletElement.locate();
        }
    };

    render() {
        const { lat, lng, zoom } = this.state;
        const position = [lat, lng];
        return (
            <>
                <style>{CSS()}</style>
                {lat === 0 || lng === 0 ? (
                    <>
                        <span>
                            지도를 로딩중입니다!
                            <br />
                            조금만 기다려주세요😊
                        </span>
                        <span>지도가 로딩이 안된다면 위치 허용을 확인해 주세요!</span>
                    </>
                ) : (
                    <Map center={position} zoom={zoom} onclick={this.handleClick} ref={this.mapRef}>
                        <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
                    </Map>
                )}
            </>
        );
    }
}

export default SimpleMap;
