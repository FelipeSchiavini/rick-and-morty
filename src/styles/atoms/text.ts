import { printIntrospectionSchema } from "graphql";
import styled from "styled-components";
import { Color, FontFamily, FontSize, FontWeight } from "../global";

export const H2 = styled.h2`
    font-family: ${FontFamily.Secondary};
    font-weight:: ${FontWeight.Bold};
    font-size: ${FontSize.Medium};
`

export const H3 = styled.h3`
    font-family: ${FontFamily.Secondary};
    font-weight: ${FontWeight.Bold};
    font-size: ${FontSize.XSmall};
    color: ${(props) => props.color ? Color.White : Color.Black}
`

export const H4 = styled.h4`
    font-family: ${FontFamily.Secondary};
    font-weight: ${FontWeight.Bold};
    font-size: ${FontSize.XXSmall};
`

export const P = styled.p`
    font-family: ${FontFamily.Secondary};
    font-weight: ${FontWeight.Normal};
    font-size: ${FontSize.XXXSmall};
`
export const Span = styled.span<{bold: boolean}>`
    font-family: ${FontFamily.Secondary};
    font-weight: ${(props) =>  props.bold ? FontWeight.SemiBold : FontWeight.Normal};
    font-size: ${FontSize.XSmall};
    color: ${props => props.theme.colors.primary}
`