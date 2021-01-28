import React, { useEffect } from 'react';
import styled from 'styled-components';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {addZoneMenu} from '../modules/zone/zoneMenu';
import MenuItem from '../components/menuItem';

const MenuContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    background-color: #c9d8e6;
`;

const MenuBox = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const AddBtnBox = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Menu = () => {
    const dispatch = useDispatch();
    const {zoneMenu} = useSelector((state: RootStateOrAny) => state.zoneMenu);
    const {isLoading} = useSelector((state:RootStateOrAny) => state.getCenter);
    
    // useEffect(() => {
    //     console.log(zoneMenu);
    // }, [dispatch]);

    return(
        <MenuContainer>
            <MenuBox>
            {
                zoneMenu.length === 0 ? 
                <span>ZONE을 추가해주세요!</span>
                :zoneMenu.map((list:any, index:number) => (
                    <MenuItem
                        key = {index}
                        list = {list}
                        index = {index}
                    />
                ))
            }
            </MenuBox>
            <AddBtnBox>
                <button disabled = {isLoading} onClick = {() => dispatch(addZoneMenu())}>ZONE 추가</button>
            </AddBtnBox>
        </MenuContainer>
    )
}

export default Menu;