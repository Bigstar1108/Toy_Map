import React, { useEffect } from 'react';
import styled from 'styled-components';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {addZoneMenu, removeZoneMenu} from '../modules/zone/zoneMenu';

const MenuContainer = styled.div`
    width: 100%;
    height: 10%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-direction: row;
    background-color: #c9d8e6;
`;

const MenuItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
`;

const Menu = () => {
    const dispatch = useDispatch();
    const {zoneMenu} = useSelector((state: RootStateOrAny) => state.zoneMenu);

    // useEffect(() => {
    //     console.log(zoneMenu);
    // }, [dispatch]);

    return(
        <MenuContainer>
            <MenuItem>
                <span>ZONE 1</span>
                <button>설정 완료</button>
            </MenuItem>
            <MenuItem>
                <span>ZONE 2</span>
                <button>설정 완료</button>
            </MenuItem>
            <MenuItem>
                <span>ZONE 3</span>
                <button>설정 완료</button>
            </MenuItem>
        </MenuContainer>
    )
}

export default Menu;