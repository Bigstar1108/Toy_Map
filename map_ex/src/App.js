import React, { useState } from 'react';
import SimpleMap from './component/map';
import Menu from './component/menu';
import './App.css';

const App = () => {
    const ZoneInfo = [
        {
            id: 0,
            display: 'ZONE 1',
            colorCode: '#3095f8',
        },
        {
            id: 1,
            display: 'ZONE 2',
            colorCode: '#ff2625',
        },
        {
            id: 2,
            display: 'ZONE 3',
            colorCode: '#c81dcf',
        },
    ];

    const [zoneIndex, setZoneIndex] = useState(undefined);
    const [loading, setLoading] = useState(true);

    return (
        <div className="App">
            <div className="Menu">
                <Menu ZoneInfo={ZoneInfo} setZoneIndex={(index) => setZoneIndex(index)} zoneIndex={zoneIndex} loading={loading} />
            </div>
            <div className="Map">
                <SimpleMap zoneIndex={zoneIndex} ZoneInfo={ZoneInfo} setLoading={() => setLoading(!loading)} />
            </div>
        </div>
    );
};

export default App;
