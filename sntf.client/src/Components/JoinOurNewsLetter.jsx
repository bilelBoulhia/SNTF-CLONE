import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Card, CardHeader, Highlight, Heading, CardBody, Button, CardFooter, Grid, Image, Text, Box } from '@chakra-ui/react'
import { useState, useEffect, useRef } from "react";
import { useDisclosure, useColorMode } from '@chakra-ui/react';
import { Flex,Input, VStack ,IconButton, useColorModeValue, Stack,HStack, Divider,GridItem, Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react';

import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import { ChevronRightIcon,ChevronLeftIcon  } from '@chakra-ui/icons'
import React from 'react'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'


export  default  function JoinOurNewsLetter(){

    const [input, setInput] = useState('')
    const { colorMode } = useColorMode();
    const handleInputChange = (e) => setInput(e.target.value)

    
    
    return(
        
        <>

            <Stack p={5} direction={{base: 'column',sm: 'column',
               
                md: 'row',
                lg: 'row',
                xl: 'row',
                '2xl': 'row',}}  

                   
            
            >
                <Box width={{base:'100%',sm: '100%',

                    md: '50%',
                    lg: '50%',
                    xl: '50%',
                    '2xl': '50%',}}
                     textAlign="left"
                     p='0px 100px 0px 20px'
                     bgGradient="linear(to-l, #0C356A, #070F2B)"
                     height='350px' 
                     borderRadius={20}
                     display="flex"
                     alignItems="center"
                     position="relative">

                  

                    <Heading lineHeight='tall'  color='white'>

                        <Highlight
                            fontWeight='bold'
                            query='NOTRE'
                            color='white'
                            styles={{
                                px: '2',
                                py: '2',
                                rounded: '15px',
                                bg: colorMode === 'light' ? '#8cc4e4' : '#0f3261',
                                color: colorMode === 'light' ? 'black' : 'white',
                                fontFamily: 'Poppins',
                            }}
                        >
                            JOIGNEZ-VOUS À NOTRE NEWS
                        </Highlight>

                    </Heading>

                  

                </Box>

                <Box
                   
                    width={{base:'100%',sm: '100%',

                        md: '50%',
                        lg: '50%',
                        xl: '50%',
                        '2xl': '50%',}}
                    borderRadius={20}
                    justifyContent="center"
                    height='350px'
                    display="flex"
                    alignItems='center'
                    textAlign='center'
             
                    style={{
                        background:  'linear-gradient(to left, #4CB9E7, #1B3C73)' ,
                        backdropFilter: 'blur(200px)',
                        whiteSpace: 'nowrap',
                        boxShadow: '5px 2px 10px rgba(0, 0, 0, 0.2)',
                    }}
                >


                    <FormControl  maxW='350px' >
                     
                        <Input placeholder='email' _placeholder={{color:'white'}}  color='white' w={{base:'200px'}}  type='email' value={input}   onChange={handleInputChange} />

                            <FormHelperText>
                          
                            </FormHelperText>

                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        
                        
                        <Button    bg='#00224D' color='white'  _hover={{bg:'#0B60B0'}}>ABonnez-vous</Button>
                    </FormControl>
                    
                    
                </Box>
            </Stack>
           
        </>
        
        
    )
    
    
    
    
    
}