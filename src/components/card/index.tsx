import React from "react";
import { H4, P } from "../../styles/atoms/text";
import { CardWrapper, CardImage, TextInfo } from "./card.style";


export interface Card {
    gender: string;
    id: string;
    image: string;
    name: string;
    status: string;
    handleShow: () => void;
}

const RickMortyCard: React.FC<Card> = ({handleShow, image, status, name, gender}): JSX.Element => {

    return (
    <>
        <CardWrapper onClick={handleShow}> 
            <CardImage src={image} alt={`${name}-image`}  />
            <TextInfo>
                <H4>{name}</H4>
                <P>{status}</P>
                <P>{gender}</P>
            </TextInfo>
        </CardWrapper>
    </>
    )
}

export default RickMortyCard

