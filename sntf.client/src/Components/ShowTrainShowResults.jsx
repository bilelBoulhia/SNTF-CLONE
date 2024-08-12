import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Text,
    Select,
    Container,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Highlight,
    ModalCloseButton,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons'
import { useColorMode } from '@chakra-ui/react';
import React, { useState, useEffect, useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import {
    CardHeader,
    Slide,
    SimpleGrid,
    Card,
    CardBody,
    Heading,
    CardFooter,
    StatGroup,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    Flex,
} from '@chakra-ui/react';
import SechduleCard from "@/Components/SechduleCard.jsx";

export default function ShowTrainShowResults({ Depart, Arrivage }) {
    const [toggle, setToggle] = useState(false)
    const toggleWindow = () => {
        setToggle(!toggle);
        
     
    };
    
   

    const { colorMode } = useColorMode();

    return (
        <>
            
            <Button bg="#00224D" color="white" onClick={toggleWindow} _hover={{ bg: '#0B60B0' }} mr={3}>
                Rechercher
            </Button>

            {toggle && (
                <Slide direction="bottom" in={toggle} style={{ zIndex: 10 }}>
                    <Box
                        //p="150px"
                        color="white"
                        mt="4"
                        maxH="500px"
                        h="500px"
                        bg={colorMode === 'light' ?  'white' : 'gray.900'}
                        rounded="md"
                        shadow="md"
                        overflowY="auto"
                        css={{
                            '&::-webkit-scrollbar': {
                                width: '4px',
                            },
                            '&::-webkit-scrollbar-track': {
                                width: '6px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: '#265073',
                                borderRadius: '24px',
                            },
                        }}
                    >
                

                            <Flex  position="fixed" bg='none' zIndex={87}  right={0} >
                                <IconButton
                                    bg='none'
                                    color={colorMode==='light' ? 'black' : 'white'}
                                    icon={<CloseIcon/>}
                                    onClick={toggleWindow}
                                    variant="ghost"
                                    
                                    _hover={{
                                        color: 'gray.400',
                                    }}
                                    top={0}
                                />
                            </Flex>
                        
                        

                            <SechduleCard depart={Depart}   arrivage={Arrivage}></SechduleCard>
                            
           
                     
                        
                        
                        
                        
                    </Box>
                </Slide>
            )}
        </>
    );
}