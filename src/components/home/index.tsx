import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Button } from '../../styles/atoms/button';
import { H2 } from '../../styles/atoms/text';
import { Flex, VSeparator } from '../../styles/atoms/utils';
import { GetCharacterInfo } from '../../utils/query/get-character-info.query';
import RickMortyCard, { Card } from '../card';
import { CardModal } from '../card/card.modal';
import { Footer } from '../footer';
import { Background, CardContainer } from './home.style';


export interface CharacterInfo {
    gender: string;
    id: string;
    image: string;
    name: string;
    species: string;
    status: string;
    type: string;
    episode: Array<Record<'name', string>>
}

const Home: React.FunctionComponent = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [characterData, setCharacterData] = useState<CharacterInfo | undefined>()

    const { loading, error, data } = useQuery(GetCharacterInfo, {
        variables: {page: currentPage, gender: "Female"}
    });
    
    const handleCloseModal = (): void => setShowModal(false);
    const handleShowModal = (id: string): void => {
        setShowModal(true)
        const cardInfo = data?.characters?.results.find((d: any) => id === d.id)
        setCharacterData(cardInfo)
    };    
  
    const addPage = (): void => {
        const numberOfCards = data?.characters?.info?.count
        if (Math.ceil(numberOfCards / 20) <= currentPage ) {
            setCurrentPage(1)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

    const subtractPage = (): void => {
        const numberOfCards = data?.characters?.info?.count
        if (currentPage === 1) {
            setCurrentPage(Math.ceil(numberOfCards / 20) )
        } else {
            setCurrentPage(currentPage - 1)
        }
    }

    if (error) return null
    if (loading) return null
    return (
        <>  
            {showModal && <CardModal handleClose={handleCloseModal} characterData={characterData} />}
            <Background>
            <VSeparator/>
            <Flex>
                <Button onClick={subtractPage}> PÁGINA ➖ </Button>
                    <H2>{currentPage}</H2>
                <Button onClick={addPage}> PÁGINA ➕</Button>
            </Flex>
            <VSeparator />
            <VSeparator/>
            <CardContainer>
                {
                    data?.characters?.results.map((card: Card) =>
                    <RickMortyCard key={card.id} {...card} handleShow={()=>handleShowModal(card.id)} />)
                }
            </CardContainer>
            </Background>
            <Footer/>
        </>
    )
}

export default Home
