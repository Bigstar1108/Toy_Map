import React from 'react';
import styled from 'styled-components';

const LoadingText = styled.span`
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 800;
    color: white;
`;

const Loading = () => {
    return(
        <>
            <LoadingText>
                지도를 로딩중입니다!
                <br />
                조금만 기다려주세요😊
            </LoadingText>
            <LoadingText>지도가 로딩이 안된다면 위치 허용을 확인해 주세요!</LoadingText>
        </>
    )
}

export default Loading;