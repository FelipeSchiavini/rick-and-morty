import styled from "styled-components";
import { Border, FontWeight, Spacing } from "../global";

export const Button = styled.button`
    border-radius : ${Border.Radius};
    padding: ${Spacing.Small} ${Spacing.Large};
    background-color: ${props => props.theme.colors.secundary};
    font-weight: ${FontWeight.Bold};

`