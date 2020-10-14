import React, { useState, useEffect } from 'react';

const Menu = ({ ZoneInfo, setZoneIndex, zoneIndex, loading }) => {
    const MenuItem = ({ list }) => {
        const [disableBtn, setDisableBtn] = useState(false);

        useEffect(() => {
            if (zoneIndex !== undefined) {
                if (zoneIndex !== list.id) {
                    setDisableBtn(true);
                } else {
                    setDisableBtn(false);
                }
            } else {
                setDisableBtn(false);
            }
        }, [zoneIndex]);

        return (
            <div className="MenuItem">
                <div>
                    <span style={{ color: `${list.colorCode}` }}>{list.display}</span>
                </div>
                <div>
                    <>
                        <button disabled={disableBtn || loading} onClick={zoneIndex === list.id ? () => setZoneIndex(undefined) : () => setZoneIndex(list.id)} style={{ cursor: 'pointer' }}>
                            {zoneIndex === list.id ? '설정 완료' : '설정 하기'}
                        </button>
                    </>
                </div>
            </div>
        );
    };

    return (
        <>
            {ZoneInfo.map((list) => (
                <MenuItem list={list} />
            ))}
        </>
    );
};

export default Menu;
