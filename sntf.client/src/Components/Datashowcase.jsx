
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Card, CardHeader, Highlight, Heading, CardBody, Button, CardFooter, Grid, Image, Text, Box } from '@chakra-ui/react'
import { useState, useEffect, useRef } from "react";
import { useDisclosure, useColorMode } from '@chakra-ui/react';
import { Stack,HStack, Divider,GridItem, Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react';
import traincivil from '@/assets/STADLER.jpg';



export  default function Datashowcase(){

    const { colorMode } = useColorMode();
    return(
        
        
        <>
        <Stack>
            <Box


         
                p='0px 30px 0px 30px'
                textAlign="center"
               
                mt={10}
                borderRadius={20}


                position="relative"




            >




                <Heading lineHeight='tall'>
                    <Highlight
                        query='RÉSEAU'
                        styles={{
                            px: '2',
                            py: '2',
                            rounded: '15px',
                            bg: colorMode === 'light' ? '#8cc4e4' : '#0f3261',
                            color: colorMode === 'light' ? 'black' : 'white',
                            fontFamily: 'Poppins',}}
                    >
                        CONSISTANCE DU RÉSEAU FERROVIAIRE
                    </Highlight>
                </Heading>

                <Text
                    textAlign="center"
                    fontFamily= 'Poppins'
                    mt='50px'

                >

                    NOTRE RÉSEAU DES CHEMINS DE FER S'ÉTEND SUR 4498 KM, 
                    ET COUVRE 30 WILAYAS. IL EST AUJOURD’HUI PARMI LES PLUS
                    MODERNES D'AFRIQUE. IL SERT AU TRANSPORT DE PERSONNES ET DE 
                    MARCHANDISES. L’AMBITION DES POUVOIRS PUBLICS EST DE CONNECTER 
                    TOUTES LES VILLES D’ALGÉRIE ENTRE ELLES PAR LE RÉSEAU FERROVIAIRE.

                </Text>
                <Heading mt={8} lineHeight='tall' fontSize={30}>
                    <Highlight
                        
                        query='VOTRE'
                        styles={{
                            px: '2',
                            py: '2',
                            rounded: '15px',
                            bg: colorMode === 'light' ? '#8cc4e4' : '#0f3261',
                            color: colorMode === 'light' ? 'black' : 'white',
                            fontFamily: 'Poppins',}}
                    >
                        LA SNTF MET À VOTRE SERVICE
                    </Highlight>

                </Heading>

                <Stack direction={['column', 'column', 'row']} align="center" justify="center" mt={10}>
                    <Box my={4}>
                        <Text lineHeight="tall" fontFamily="poppins" fontSize={30}>
                            64
                        </Text>
                        <Heading lineHeight="tall" fontFamily="poppins" fontSize={15}>
                            <Highlight
                                query="ÉLECTRIQUES"
                                styles={{
                                    px: '1',
                                    py: '1',
                                    rounded: '15px',
                                    bg: colorMode === 'light' ? '#8cc4e4' : '#0f3261',
                                    color: colorMode === 'light' ? 'black' : 'white',
                                    fontFamily: 'Poppins',
                                }}
                            >
                                AUTOMOTRICES ÉLECTRIQUES
                            </Highlight>
                        </Heading>
                    </Box>

                    <Divider orientation="vertical" h="100px" mx={4} display={['none', 'none', 'flex']} />

                    <Box my={4}>
                        <Text lineHeight="tall" fontFamily="poppins" fontSize={30}>
                            416
                        </Text>
                        <Heading lineHeight="tall" fontFamily="poppins" fontSize={15}>
                            <Highlight
                                query="VOYAGEURS"
                                styles={{
                                    px: '1',
                                    py: '1',
                                    rounded: '15px',
                                    bg: colorMode === 'light' ? '#8cc4e4' : '#0f3261',
                                    color: colorMode === 'light' ? 'black' : 'white',
                                    fontFamily: 'Poppins',
                                }}
                            >
                                VOITURES VOYAGEURS
                            </Highlight>
                        </Heading>
                    </Box>

                    <Divider orientation="vertical" h="100px" mx={4} display={['none', 'none', 'flex']} />

                    <Box my={4}>
                        <Text lineHeight="tall" fontFamily="poppins" fontSize={30}>
                            17
                        </Text>
                        <Heading lineHeight="tall" fontFamily="poppins" fontSize={15}>
                            <Highlight
                                query="DIESEL"
                                styles={{
                                    px: '1',
                                    py: '1',
                                    rounded: '15px',
                                    bg: colorMode === 'light' ? '#8cc4e4' : '#0f3261',
                                    color: colorMode === 'light' ? 'black' : 'white',
                                    fontFamily: 'Poppins',
                                }}
                            >
                                AUTORAILS DIESEL
                            </Highlight>
                        </Heading>
                    </Box>

                    <Divider orientation="vertical" h="100px" mx={4} display={['none', 'none', 'flex']} />

                    <Box my={4}>
                        <Text lineHeight="tall" fontFamily="poppins" fontSize={30}>
                            261
                        </Text>
                        <Heading lineHeight="tall" fontFamily="poppins" fontSize={15}>
                            <Highlight
                                query="DIESEL"
                                styles={{
                                    px: '1',
                                    py: '1',
                                    rounded: '15px',
                                    bg: colorMode === 'light' ? '#8cc4e4' : '#0f3261',
                                    color: colorMode === 'light' ? 'black' : 'white',
                                    fontFamily: 'Poppins',
                                }}
                            >
                                LOCOMOTIVES DIESEL
                            </Highlight>
                        </Heading>
                    </Box>

                    <Divider orientation="vertical" h="100px" mx={4} display={['none', 'none', 'flex']} />

                    <Box my={4}>
                        <Text lineHeight="tall" fontFamily="poppins" fontSize={30}>
                            14
                        </Text>
                        <Heading lineHeight="tall" fontFamily="poppins" fontSize={15}>
                            <Highlight
                                query="ÉLECTRIQUES"
                                styles={{
                                    px: '1',
                                    py: '1',
                                    rounded: '15px',
                                    bg: colorMode === 'light' ? '#8cc4e4' : '#0f3261',
                                    color: colorMode === 'light' ? 'black' : 'white',
                                    fontFamily: 'Poppins',
                                }}
                            >
                                LOCOMOTIVES ÉLECTRIQUES
                            </Highlight>
                        </Heading>
                    </Box>
                </Stack>
                    
                    
              
                



            </Box>



        </Stack>
        
        
        
        
        </>
        
      
        
        
        
    );
    
    
}