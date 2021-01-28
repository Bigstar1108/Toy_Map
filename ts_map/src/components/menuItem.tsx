import React from 'react';
import styled from 'styled-components';
import {useDispatch, RootStateOrAny, useSelector} from 'react-redux';
import {removeZoneMenu, setZoneIndex} from '../modules/zone/zoneMenu';
import {clearMarkerData} from '../modules/zone/markerData';
import {addZonePosition} from '../modules/zone/zonePosition';

const MenuItemDiv = styled.div`
    display: flex;
    width: 30%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
`;

const MenuItem = (list: any) => {
    const dispatch = useDispatch();
    const {setIndex} = useSelector((state: RootStateOrAny) => state.zoneMenu);
    const {markerData} = useSelector((state:RootStateOrAny) => state.markerData);

    const {id, colorCode} = list.list;
    const {index} = list;

    const onClickMenuBtn = () => {
        if(setIndex === id){
            dispatch(clearMarkerData());
            dispatch(setZoneIndex(id));
        }else{
            console.log("false");
            dispatch(setZoneIndex(id));
        }
    }

    return(
        <MenuItemDiv>
            <span style = {{color: `#${colorCode}`}}>{`ZONE ${index + 1}`}</span>
            <>
            <button disabled = {!(setIndex === undefined) && !(setIndex === id)} onClick = {onClickMenuBtn}>
                {setIndex === id ? '설정 완료' : '설정 하기'}
            </button>
            <button onClick = {() => dispatch(removeZoneMenu(id))}>삭제</button>
            </>
        </MenuItemDiv>
    )
}

export default MenuItem;