import { Col } from "react-grid-system";
import styled from "styled-components";
import { Border } from "../../styles/global";

export const HeaderWrapper = styled.div`
    background-color: ${props => props.theme.colors.secundary};
    border-bottom: ${Border.Width} solid ${Border.Color};
    min-height: 12vh;
`

export const ColAlign = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
`