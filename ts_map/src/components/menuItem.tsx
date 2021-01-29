import React from 'react';
import styled from 'styled-components';
import {useDispatch, RootStateOrAny, useSelector} from 'react-redux';
import {removeZoneMenu, setZoneIndex} from '../modules/zone/zoneMenu';
import {clearMarkerData} from '../modules/zone/markerData';
import {addZonePosition, removeZonePosition, clearZonePositionByIndex} from '../modules/zone/zonePosition';

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

interface MenuItemType{
    list: any;
    index: number;
}

const MenuItem:React.FC<MenuItemType> = ({list, index}) => {
    const dispatch = useDispatch();
    const {setIndex} = useSelector((state: RootStateOrAny) => state.zoneMenu);
    const {markerData} = useSelector((state:RootStateOrAny) => state.markerData);

    const {id, colorCode} = list;

    const onClickMenuBtn = () => {
        if(setIndex === id){
            dispatch(addZonePosition({index: index, position: markerData}));
            dispatch(clearMarkerData());
            dispatch(setZoneIndex(id));
        }else{
            dispatch(clearZonePositionByIndex(index));
            dispatch(setZoneIndex(id));
        }
    }

    const onClickRemove = () => {
        dispatch(removeZoneMenu(id));
        dispatch(removeZonePosition(index));
    }

    return(
        <MenuItemDiv>
            <span style = {{color: `#${colorCode}`}}>{`ZONE ${index + 1}`}</span>
            <>
            <button disabled = {!(setIndex === undefined) && !(setIndex === id)} onClick = {onClickMenuBtn}>
                {setIndex === id ? '설정 완료' : '설정 하기'}
            </button>
            <button disabled = {setIndex === id} onClick = {onClickRemove}>삭제</button>
            </>
        </MenuItemDiv>
    )
}

export default MenuItem;