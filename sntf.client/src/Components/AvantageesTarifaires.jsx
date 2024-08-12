/* eslint-disable no-unused-vars */
import { Highlight, Heading, Grid, Text, Box } from '@chakra-ui/react'
import { useState } from "react";
import { useColorMode,useDisclosure} from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';


import React from 'react'

export  default function  AvantageesTarifaires(){

    const [currentIndex, setCurrentIndex] = useState(-1);


    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const items = [
        {
            title: 'Jusqua 47%' ,
            content: ' Réduction selon nombre de billets jusqu\'à 47% à validité illimitée, dans les trains autorails \n' +
                '                en s’acquittant d’un Carnet à Coupons de 5 à 30 billets.',
        },
        {
            title: '20%',
            content: 'Réduction de 20 % et valable de 02 mois pour un Billet aller-retour et pour un voyage au delà de 200 km.',
            
            
      
        },
        {
            title: '20%',
            content: 'Réduction de 20 % et valable de 02 mois pour un Billet aller-retour et pour un voyage au delà de 200 km.',



        },
        {
            title: '20%',
            content: 'Réduction de 20% sur un parcours de 100 Km en s’acquittant d’une «Carte jeune» entre 15 et jusqu\'à 28 ans.',

          

        },
        
        {
            title: '20%',
            content:'Réduction de 20% sur un parcours de 100 km en s’acquittant d’une «Carte 3éme âge» pour les séniors (+55 ans Femme, +60 ans Homme).'



        },
     
        {
            title: '50%',
            content: 'Réduction de 50% sur toutes les gares du' +
                ' réseau en s’acquittant d’une «Carte donnant droit à la délivrance de billets à demi-tarif» (possibilité de paiement échelonné 3,6 mois ou 1an).',
        },

        {
            title: '50%/75%',
            content: 'Réduction allant de 50% jusqu’à 75% pour tout Voyage en groupe (Ordinaire. Scouts, Congressistes, Sportif) plus de 10 personnes.'
        },

        {
            title: '30%/40%',
            content: 'Réductions entre 30% pour toute Carte d’abonnement hebdomadaire et 40% pour les cartes mensuelles, Trimestrielles, semestrielles et annuels de banlieue.'
        },

        {
            title: '35%',
            content: 'Réductions de 35% pour un abonnement ordinaire valable pour les trains régionaux.'
        },

        {
            title: '5%/12%',
            content: 'Gratuité de 05 mois par an pour un abonnement ordinaire annuel avec possibilité d’un payement échelonné sur un parcours max de 200 km.'
        },

        {
            title: 'Convention',
            content: 'Payement à posteriori pour le transport des conventionnés avec le Bon de réquisition.'
        },
    ];


    const { colorMode } = useColorMode();

    return(

        <>

            <Heading lineHeight='tall' align='center'>
                <Highlight
                    query='TARIFAIRES'
                    styles={{
                        px: '2',
                        py: '2',
                        rounded: '15px',
                        bg: colorMode === 'light' ? '#8cc4e4' : '#0f3261',
                        color: colorMode === 'light' ? 'black' : 'white',
                        fontFamily: 'Poppins',}}
                >
                    AVANTAGES TARIFAIRES
                </Highlight>
            </Heading>


       

            <Flex  direction="column" align="center" justify="center" pos="relative">
                <Grid
                    templateColumns={{
                        base: "repeat(2, 1fr)",
                        sm:"repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
                        lg: "repeat(5, 1fr)",
                    }}
                    gap={2}
                    alignItems="center"
                    justifyContent="center"
                >
                    {items.map((item, index) => (
                        <Flex
                            key={index}
                            p={2}
                            
                            borderRadius='50px'
                            boxShadow={index === currentIndex ? 'md' : 'none'}
                            opacity={index === currentIndex ? 1 : 0.8}
                            transform={index === currentIndex ? 'scale(1)' : 'scale(0.8)'}
                            transition="all 0.3s ease-in-out"
                            align="center"
                            _hover={{
                                boxShadow: 'md',
                                opacity: 1,
                                transform: 'scale(1)',
                            }}
                        >
                            <Box h='150px'   cursor="default">
                                <Text fontWeight="bold" mb={2} fontSize={{base:'25px',sm:'2em'}}>
                                    {item.title}
                                </Text>
                                <Text fontSize={{base:'15px',sm:'15px'}}>{item.content}</Text>
                            </Box>
                        </Flex>
                    ))}
                </Grid>
            </Flex>
        </>


    )





}