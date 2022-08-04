import styled from "styled-components";

interface SwitchHandleProps {
    checked: boolean | undefined
}

export const SwitchHandle = styled.span<SwitchHandleProps>`
    background: red;
    border-radius: 50%;
    display: inline-block;
    height: 14px;
    left: 50%;
    position: relative;
    top: 4px;
    width: 14px;
    z-index: 3;
    background-color: ${props => props.theme.colors.secundary};
    transform: ${props => props.checked ? 'translateX(22px)' : 'translateX(0px)'};
    transition: 0.4s;
    &:hover {
        transform: scale(1.2)
    }
`

export const SwitchWrapper = styled.span`
    border-radius: 20px;
    cursor: pointer;
    height: 24px;
    float: left;
    overflow: hidden;
    position: relative;
    width: 48px;
    background-color: green;
`

export const SwitchLabel = styled.span`
    float: left;
    line-height: 2.5rem;
    margin-left: 10px;
    user-select: none;
`

export const Switch = styled.span`
    color: #fff;
    display: inline-block;
    height: 100%;
    left: -100%;
    position: relative;
    transition: 100ms linear;
    width: 200%;
    transform: translateX(6px);
    &:checked {
        background: blue;
    }
`

export const CheckboxToggle = styled.input`
    opacity: 0;
    position: absolute;
    &:checked {
        background: blue;
    }
`