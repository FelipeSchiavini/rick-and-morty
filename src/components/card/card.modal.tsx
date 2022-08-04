import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { Column } from '../../styles/atoms/grid';
import { H2, H3, P, Span } from '../../styles/atoms/text';
import { Divisor, VSeparator, VSmallSeparator } from '../../styles/atoms/utils';
import { CharacterInfo } from '../home';
import { Image, Modal } from './card.style';

interface ModalProps {
    characterData: CharacterInfo | undefined;
    handleClose: () => void;
} 


export const CardModal: React.FunctionComponent<ModalProps> = ({handleClose, characterData}) => {     
    return (
        <Modal onClick={handleClose}>
            <Container style={{width: '100%'}} >
                <Row>
                    <Col lg={1} sm={0}>
                    </Col>
                    <Column lg={6} sm={12}>
                        <Image src={characterData?.image} alt={`${characterData?.name}-image`} />
                    </Column>
                    <Column lg={4} sm={12} >
                        <VSeparator/>
                        <H2>{characterData?.name}</H2>
                        <Divisor />
                        <VSeparator/>
                        {characterData?.type && <P> <Span bold={true}>type: </Span>{characterData?.type} </P>}
                        <VSmallSeparator/>

                        <P><Span bold={true}>Gender:</Span> {characterData?.gender}</P>
                        <VSmallSeparator/>

                        <P><Span bold={true}>Species: </Span>{characterData?.species}</P>
                        <VSmallSeparator/>

                        <P><Span bold={true}>Status:</Span> {characterData?.status}</P>
                        <VSmallSeparator/>

                        <P><Span bold={true}>Episode(s):</Span> {characterData?.episode.map((ep, index) =>{
                            if(index == characterData.episode.length - 1) return `${ep.name}.`
                            return `${ep.name}, `
                        })}</P>
                    </Column>
                    <Col lg={1} sm={0}>
                    </Col>
                </Row>
            </Container>
        </Modal>);
}