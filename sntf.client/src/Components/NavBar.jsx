// noinspection JSAnnotator
import SNTFBanner from '@/assets/SNTF_Banner_logo.png'
'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
    useColorModeValue,
    Stack,
    Spacer,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';

import sntf from '../assets/sntf.png'
import DarkLightTheme from "@/Components/DarkLightTheme.jsx";
import ChiffresCles from "@/Components/ChiffresCles.jsx";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,

} from '@chakra-ui/react'
import chifres from "@/assets/CHIFFRE_CLE (1).jpg";
export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <Box position="fixed" top={0} left={0} right={0} zIndex={1000} bgGradient="linear(to-l, #40A2D8, #070F2B)" pr={5}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                 _hover={{
                     
                     bg:'none'
                 }}
                        color='white'
                        onClick={isOpen ? onClose : onOpen}
                        bg='transparent'
                    />
                    <Box width="100%" height="42px" overflow="hidden">
                        <Image
                            objectFit="contain"
                            src={SNTFBanner}
                            width="100%"
                            height="100%"
                        />
                    </Box>
                    <Flex alignItems={'center'}>
                        <Image
                            boxSize='40px'
                            src={sntf}
                        />
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Flex
                        pb={4}
                        display="flex"
                    >
                        <Stack as={'nav'} spacing={4} pb={3}>
                            <Menu isLazy >
                          
                                <MenuButton
                                    as={Flex}
                                    alignItems="center"
                                    _hover={{ bg: useColorModeValue('gray.600', 'gray.700') }}
                                    _expanded={{ bg: useColorModeValue('gray.600', 'gray.700') }}
                                    rounded="md"
                                    px={4}
                                    py={2}
                                    color='white'
                                >
                                    A propos
                             
                                    <ChevronDownIcon />
                                </MenuButton>
                                <MenuList
                                   
                                    border="none"
                                    boxShadow="md"
                                    rounded="md"
                                >
                                    <MenuItem
                                        _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
                                       _focus={{ bg: useColorModeValue('gray.100', 'gray.700') }}
                                        onClick={handleModalOpen}
                                    >
                                        Chiffres Cles
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu isLazy>
                                <MenuButton
                                    as={Flex}
                                    alignItems="center"
                                    _hover={{ bg: useColorModeValue('gray.600', 'gray.700') }}
                                    _expanded={{ bg: useColorModeValue('gray.600', 'gray.700') }}
                                    rounded="md"
                                    px={4}
                                    color='white'
                                    py={2}
                                >
                                    Activity
                                    <ChevronDownIcon />
                                </MenuButton>
                                <MenuList
                               
                                    border="none"
                                    boxShadow="md"
                                    rounded="md"
                                >
                                    <MenuItem
                                        _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
                                 
                                       _focus={{ bg: useColorModeValue('gray.100', 'gray.700') }}
                                    >
                                        avantages tarifaires
                                    </MenuItem>
                                    <MenuItem
                                        _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
                                        _focus={{ bg: useColorModeValue('gray.100', 'gray.700') }}
                                    >
                                        Merchendise
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu isLazy>
                                <MenuButton
                                    as={Flex}
                                    alignItems="center"
                                    _hover={{ bg: useColorModeValue('gray.600', 'gray.700') }}
                                    _expanded={{ bg: useColorModeValue('gray.600', 'gray.700') }}
                                    rounded="md"
                                    color='white'
                                    px={4}
                                    py={2}
                                >
                                    Communication
                       
                                    <ChevronDownIcon />
                                </MenuButton>
                                <MenuList
                                    
                                    border="none"
                                    boxShadow="md"
                                    rounded="md"
                                >
                                    <MenuItem
                                        _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
                                        _focus={{ bg: useColorModeValue('gray.100', 'gray.700') }}
                                    >
                                        Gallery
                                    </MenuItem>
                                    <MenuItem
                                        _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
                                        _focus={{ bg: useColorModeValue('gray.100', 'gray.700') }}
                                    >
                                        sensibilatsation
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu isLazy>
                                <MenuButton
                                    as={Flex}
                                    alignItems="center"
                                    _hover={{ bg: useColorModeValue('gray.600', 'gray.700') }}
                                    _expanded={{ bg: useColorModeValue('gray.600', 'gray.700') }}
                                    rounded="md"
                                    px={4}
                                    py={2}
                                    color='white'
                                >
                                    Le group Sntf
                                    
                            
                                </MenuButton>
                                
                            </Menu>
                            <Menu isLazy>
                                <MenuButton
                                    as={Flex}
                                    alignItems="center"
                                    _hover={{ bg: useColorModeValue('gray.600', 'gray.700') }}
                                    _expanded={{ bg: useColorModeValue('gray.600', 'gray.700') }}
                                    rounded="md"
                                    px={4}
                                    color='white'
                                    py={2}
                                >
                                    Contact
                                 
                               
                                </MenuButton >

                               <MenuItem   _focus={{ bg: 'transparent' }}>


                                   <DarkLightTheme ></DarkLightTheme>
                               </MenuItem>
                              
                            </Menu>
                        </Stack>
                    </Flex>
                ) : null}
            </Box>

            <Modal isOpen={isModalOpen}  onClose={handleModalClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                   
                        <Image src={chifres} />
                 
                </ModalContent>
            </Modal>
        </>
    )
}