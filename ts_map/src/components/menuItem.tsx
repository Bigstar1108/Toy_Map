import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {removeZoneMenu} from '../modules/zone/zoneMenu';

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

    const {id, colorCode} = list.list;
    const {index} = list;
    return(
        <MenuItemDiv>
            <span style = {{color: `#${colorCode}`}}>{`ZONE ${index + 1}`}</span>
            <button onClick = {() => dispatch(removeZoneMenu(id))}>설정 완료</button>
        </MenuItemDiv>
    )
}

export default MenuItem;