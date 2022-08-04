import styled from "styled-components";
import { Col } from 'react-grid-system';

export const Column = styled(Col)`
    background-color: ${props => props.theme.colors.secundary};
    outline-width: 0px
    &:focus{
        outline:none
    }
`