import React from "react";
import {
    Box, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, IconButton, useBreakpointValue, Stack, Heading, Text,Select, Container, Button, Flex, Modal, ModalOverlay, ModalContent,ModalHeader, ModalFooter,
    ModalBody,
    Highlight,
    ModalCloseButton,Input,Image,
    Tag
} from '@chakra-ui/react'

import east from '@/assets/Est.jpg'
import west from '@/assets/Ouest.jpg'
import airport from '@/assets/Aéroport.jpg'
import regional from '@/assets/régionauxDRFA.jpg'
import zeralda from '@/assets/Zeralda.jpg'
import { useDisclosure,useColorMode } from '@chakra-ui/react';
import { ChevronRightIcon,ChevronLeftIcon } from '@chakra-ui/icons'
import chifres from "@/assets/CHIFFRE_CLE (1).jpg";
import {useState, useRef }  from 'react'
export  default  function Horraires(){
    const {isOpen,onOpen,onClose} = useDisclosure()
    const { colorMode } = useColorMode();
    const btnRef = useRef()


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

   


    
    const railData =[

        {key :'ALGER EST' ,src:east},
        {key:'ALGER OUEST',src:west},
        {key:'ALGER ZERALDA',src:zeralda},
        {key:'AEROPORT',src:airport},
        {key:'TRAINS REGIONAUX',src:regional},
        
    ]
    const handleModalOpen = (key) => {
        const selectedRail = railData.find((rail) => rail.key === key);
        setSelectedImage(selectedRail.src);
        setIsModalOpen(true);
    };
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return(
        <>
        <Heading  float='right'
                  fontSize={{
                      base: '17px',
                      sm: '25px',
                      md: '35px',
                      lg: '38px',
                      xl: '38px',
                      '2xl': '50px',}}
                  
                  maxW='700px' lineHeight='tall' onClick={onOpen} color='white'  _hover={{ cursor: "pointer" }} bgGradient="linear(to-l, #070F2B, #0C356A)"  px={8} py={4} borderRadius='25px'>

            <ChevronLeftIcon />
            
            
            <Highlight
                
                
                fontWeight="bold"  query='TRAINS' styles={{fontFamily: 'Poppins',px: '2', rounded: '15px', bg: colorMode === 'light' ? '#8cc4e4' : '#0f3261' , color:colorMode==='light' ? 'black' : 'white'}}>
                Horaires des Trains de Banlieue  
            </Highlight>
  
        </Heading>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>

                        <Heading lineHeight='tall'  fontFamily='poppins'>

                            <Highlight fontWeight="bold"  query='BANLIEUE' styles={{px: '2', py: '1', rounded: '5px', bg: colorMode === 'light' ? '#8cc4e4' : '#0f3261' , color:colorMode==='light' ? 'black' : 'white'}}> HORAIRES DES TRAINS DE BANLIEUE</Highlight>

                        </Heading>
                      
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack mt={16} spacing={8}>
                            {railData.map((rail) => (
                                <Button
                                    key={rail.key}
                                    bg='#00224D'
                                    color='white'
                                    onClick={() => handleModalOpen(rail.key)}
                                    _hover={{bg:'#0B60B0'}}
                                >
                                    {rail.key}
                                </Button>
                            ))}
                            
                        </Stack>
                 

                    </DrawerBody>

                
                </DrawerContent>
            </Drawer>

            <Modal isOpen={isModalOpen}  onClose={handleModalClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <Image boxSize={600} src={selectedImage} />
                </ModalContent>
            </Modal>
            
            
            
            
        </>
        
        
        
        
    );



}