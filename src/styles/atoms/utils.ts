import styled from "styled-components";
import { Spacing } from "../global";

export const Divisor = styled.div`
    height: 3px;
    border-bottom: 1px solid black;
    width: 90%
`
export const VSeparator = styled.div`
    padding-bottom: ${Spacing.Medium};
`

export const VSmallSeparator = styled.div`
    padding-bottom: ${Spacing.Small};
`

export const Flex = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 50px;
`
