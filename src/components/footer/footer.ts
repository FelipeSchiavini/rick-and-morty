import styled from "styled-components";
import { Border, Color } from "../../styles/global";

export const FooterWrapper = styled.div`
    background-color: ${props => props.theme.colors.footer};
    width: 100%;
    min-height: 15vh;
    text-align: center;
    border-top: ${Border.Width} solid ${Border.Color}
`