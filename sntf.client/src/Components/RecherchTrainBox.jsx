import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Select,
    Container,
    Button,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    Slide,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Highlight,
    ModalCloseButton,

} from '@chakra-ui/react'

import { useDisclosure,useColorMode } from '@chakra-ui/react';
import { ChevronRightIcon,ChevronLeftIcon } from '@chakra-ui/icons'
import React, { useState, useEffect, useRef } from 'react';
import ShowTrainShowResults from "@/Components/ShowTrainShowResults.jsx";
export default function RecherchTrainBox(){

    const options = [
        { value: '--Select--', label: '--Select--' },
        { value: 'Alger', label: 'Alger' },
        { value: 'Agha', label: 'Agha' },
        { value: 'Ateliers', label: 'Ateliers' },
        { value: 'HusseinDey', label: 'HusseinDey' },
        { value: 'Caroubier', label: 'Caroubier' },
        { value: 'ElHarrach', label: 'ElHarrach' },
        { value: 'OuedSmar', label: 'OuedSmar' },
        { value: 'BabEzouar', label: 'BabEzouar' },
        { value: 'DarElbeida', label: 'DarElbeida' },
        { value: 'Rouiba', label: 'Rouiba' },
        { value: 'RouibaInd', label: 'RouibaInd' },
        { value: 'ReghaiaInd', label: 'ReghaiaInd' },
        { value: 'Reghaia', label: 'Reghaia' },
        { value: 'Boudouaou', label: 'Boudouaou' },
        { value: 'Corso', label: 'Corso' },
        { value: 'Boumerdes', label: 'Boumerdes' },
        { value: 'Tidjelabin', label: 'Tidjelabin' },
        { value: 'Thenia', label: 'Thenia' }
    ];


    const [showData,SetShowData] = useState(false);

    const [Selecteddepart ,SetSelecteddepart] = useState('');
    const DepartProp = (event)=>{
        
        SetSelecteddepart(event.target.value);
        
    }
    const [Selectedarrivage ,SetSelectedarrivage] = useState('');
    const arrivageProp = (event)=>{

        SetSelectedarrivage(event.target.value);

    }
    
   
    
    const ShowDataAction  = () => {
        
        SetShowData(!showData);
        
    }


    const {isOpen,onOpen,onClose} = useDisclosure()
    const { colorMode } = useColorMode();
  
    
    
    return(

        <>
            <Heading  float='left'  maxW='700px' fontSize={{
                base: '17px',
                sm: '25px',
                md: '38px',
                lg: '40px',
                xl: '38px',
                '2xl': '50px',}} lineHeight='tall' onClick={onOpen} color='white'  _hover={{ cursor: "pointer" }} bgGradient="linear(to-l, #0C356A,#070F2B)"  px={8} py={4} borderRadius='25px'>
  
             
                    <Highlight   fontWeight="bold"   query='Train' styles={{fontFamily: 'Poppins',px: '2', rounded: '15px', bg: colorMode === 'light' ? '#8cc4e4' : '#0f3261' , color:colorMode==='light' ? 'black' : 'white' }}>
                        Rechercher   Votre      Train
                    </Highlight>
                    <ChevronRightIcon ml='36px' />
                    
       
               
            </Heading>
            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay  />
                <ModalContent  >{/*bg='#164e78'*/}
                    <ModalHeader >
                        
                        <Heading lineHeight='tall'  fontFamily='poppins'>

                            <Highlight fontWeight="bold"  query='Train' styles={{px: '2', py: '1', rounded: '5px', bg: colorMode === 'light' ? '#8cc4e4' : '#0f3261' , color:colorMode==='light' ? 'black' : 'white'}}> Rechercher Votre Train</Highlight>

                        </Heading>





                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text  fontFamily='poppins'>Gare de depart</Text>
                        <Select value={Selecteddepart} onChange={DepartProp}>
                            
                            
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
            
            
                        </Select>
            
            
                        <Text  fontFamily='poppins' >Gare de depart</Text>
            
                        <Select  value={Selectedarrivage} onChange={arrivageProp}>

                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
            
                        </Select >
            
                      
            
                        <Flex flexDirection="row" pt={2}  >
            
                           
                            
                        </Flex>
                    </ModalBody>
            
                    <ModalFooter>
                       
                        <ShowTrainShowResults Depart={Selecteddepart} Arrivage={Selectedarrivage}/>
                        
                       
                    </ModalFooter>
                </ModalContent>
            </Modal>
            
            
            
   



      



        </>
        
  
            
            
            

          



      
    );
    
    
}

{/*<Slide*/}
{/*    direction='bottom'*/}
{/*    in={isOpen2 && isButtonClicked}*/}
{/*    style={{ zIndex: 10 }}*/}
{/*    ref={slideRef}*/}
{/*>*/}
{/*    <Box*/}
{/*        p='150px'*/}
{/*        color='white'*/}
{/*        mt='4'*/}
{/*        bg='#6d1a3d'*/}
{/*        rounded='md'*/}
{/*        shadow='md'*/}
{/*    >*/}
{/*        <Text>dssadasd</Text>*/}
{/*    </Box>*/}
{/*</Slide>*/}
// const { isOpen2, onToggle } = useDisclosure();
// const [isButtonClicked, setIsButtonClicked] = useState(false);
//
// const slideRef = useRef(null);
// const buttonRef = useRef(null);
//
// useEffect(() => {
//     const handleClickOutside = (event) => {
//         if (
//             !slideRef.current?.contains(event.target) &&
//             !buttonRef.current?.contains(event.target)
//         ) {
//             onToggle();
//             setIsButtonClicked(false);
//         }
//     };
//
//     document.addEventListener('mousedown', handleClickOutside);
//
//     return () => {
//         document.removeEventListener('mousedown', handleClickOutside);
//     };
// }, [isOpen2, onToggle]);
//
// const handleButtonClick = () => {
//     onToggle();
//     setIsButtonClicked(!isButtonClicked);
// };

//
// const {isOpen,onOpen,onClose} = useDisclosure()
//
// const { colorMode } = useColorMode();
// const headingBgColor = { light: 'gray.200', dark: 'black' };