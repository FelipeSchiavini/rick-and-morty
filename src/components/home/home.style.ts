import styled from 'styled-components'
import { Spacing } from '../../styles/global'

export const CardContainer = styled.div`
    margin: auto;
    display:flex;
    width: 70%;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around
`

export const Background = styled.div`
    background-color: ${props => props.theme.colors.background};
    padding: ${Spacing.Medium};
    min-height: 73vh;
`