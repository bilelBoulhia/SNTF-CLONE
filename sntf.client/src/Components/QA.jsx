
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Card, CardHeader, Highlight, Heading, CardBody, Button, CardFooter, Grid, Image, Text, Box } from '@chakra-ui/react'
import { useState, useEffect, useRef } from "react";
import { useDisclosure, useColorMode } from '@chakra-ui/react';
import { Stack,HStack, Divider,GridItem, Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react';

import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Flex,
    VStack,useColorModeValue
    
    
} from '@chakra-ui/react'



export  default function QA(){
  



    const { colorMode } = useColorMode();
    
    
    return(
        
        <>
            <Heading lineHeight='tall' align='center'>
                <Highlight
                    query='TRAIN'
                    styles={{
                        px: '2',
                        py: '2',
                        rounded: '15px',
                        bg: colorMode === 'light' ? '#8cc4e4' : '#0f3261',
                        color: colorMode === 'light' ? 'black' : 'white',
                        fontFamily: 'Poppins',}}
                >
                    POURQUOI CHOISIR LE TRAIN?
                </Highlight>
            </Heading>

            <Accordion allowToggle mt={4} bg='bleu'>
                <AccordionItem>
                    <h2>
                        <AccordionButton  bg='#00224D' color='white'  _hover={{bg:'#00224D'}}>
                            <Box  as="span" flex='1' textAlign='left'>
                          
                               <Text as='b'> Voyage en groupe</Text> 
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Chaque voiture contient 54 places, le Train est le meilleur moyen pour voyager en groupe
                    </AccordionPanel>
                </AccordionItem>
            
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <Text as='b'>Plus de bagages</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Le personnel à bord est généralement plus clément pour ce qui est des bagages autorisés.
                      
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton  bg='#00224D' color='white' _hover={{bg:'#00224D'}}>
                            <Box as="span" flex='1' textAlign='left'>
                                <Text as='b'>Couchette</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        pour vos voyages de longs distances, dormez-vous à votre départ et reveillez-vous à votre arrivée
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <Text as='b'>Buvette</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Pour prendre votre café, ou casser la croute, Restau RAIL à votre service à bord du train
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton  bg='#00224D' color='white' _hover={{bg:'#00224D'}}>
                            <Box as="span" flex='1' textAlign='left'>
                                <Text as='b'>Circule tous les jours</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Jours fériés ! Weekend ! Les trains assurent les relations quotidiennement, 365 jours par an.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <Text as='b'>Transport écologique</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Non seulement prendre le Train est bon pour votre portefeuille, mais il est tout aussi bon pour l'environnement.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton  bg='#00224D' color='white' _hover={{bg:'#00224D'}}>
                            <Box as="span" flex='1' textAlign='left'>
                                <Text as='b'>Utiliser votre Laptop</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Certaines voitures sont munies de tables, vous pouvez y travailler en toute quiétude.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <Text as='b'>Hygiénique</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Durant vos voyages, pour votre confort, des sanitaires sont disponibles à bord des trains.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton  bg='#00224D' color='white'  _hover={{bg:'#00224D'}}>
                            <Box as="span" flex='1' textAlign='left'>
                                <Text as='b'>Rapide</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Evitez les embouteillages, votre voyage peut être planifié vite fait bien fait!
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton >
                            <Box as="span" flex='1' textAlign='left'>
                                <Text as='b'>Réduction des prix</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Profitez-vous de plusieurs types d'abonnements selon vos catégories et vos besoins
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton  bg='#00224D' color='white'  _hover={{bg:'#00224D'}}>
                            <Box as="span" flex='1' textAlign='left'>
                                <Text as='b'>Autonomie/Comfort</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Au fil des années, les Trains ont subis des réaménagement majeurs, ce qui a amélioré grandement l’offre de service!
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <Text as='b'>Wifi à bord (Prochainement)</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Prochainement, restez connecter avec l'exterieur du train avec le nouveau service "WIFI A BORD"
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

    
        
        
        
        </>
        
        
        
    );
    
    
    
    
    
    
    
    
    
}