import React, { Dispatch, SetStateAction, useState } from 'react'
import { DefaultTheme } from 'styled-components'
import { dark, light } from '../../styles/themes'
import { RickAndMortyLogo } from '../../utils/svg/rick-and-morty'
import Toggle from '../toggle'
import { Col, Container, Row } from 'react-grid-system';
import { ColAlign, HeaderWrapper } from './header.style'

interface HeaderProps {
    changeTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({changeTheme}) => {
    return (
        <HeaderWrapper>
            <Container>
                <Row style={{minHeight: '12vh'}}>
                    <Col lg={4} sm={0} style={{margin:'auto'}}>
                    </Col>
                    <ColAlign lg={4} sm={12}>
                        <RickAndMortyLogo />
                    </ColAlign>
                    <ColAlign lg={4} sm={12}>
                        <div style={{margin: '10px 0'}} >
                            <Toggle changeTheme={changeTheme} />
                        </div>
                    </ColAlign>
                </Row>
            </Container>
        </HeaderWrapper>
    )
}