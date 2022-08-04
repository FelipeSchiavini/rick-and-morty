import styled from "styled-components";
import { Border, Color } from "../../styles/global";

export const CardWrapper = styled.div`
    display:flex;
    border: 1px solid ${Border.Color};
    border-radius: ${Border.Radius};
    width: 230px;
    height: 84px;
    background-color: ${props => props.theme.colors.secundary};
    cursor: pointer;
`

export const CardImage = styled.img`
    border-top-left-radius: ${Border.Radius};
    border-bottom-left-radius: ${Border.Radius};
    height: 100%;
    margin-right: 8px;
    border-right: 4px solid ${Border.Color};
`

export const Image = styled.img`
    border-top-left-radius: ${Border.Radius};
    border-bottom-left-radius: ${Border.Radius};
    width: 100%;
`

export const TextInfo = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
`

export const Modal = styled.div`
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    background-color: ${Color.White};
    height: '70%';
`