import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Image,
    MenuItem
} from '@chakra-ui/react'
import chifres from '@/assets/CHIFFRE_CLE (1).jpg'
import { useColorMode,useDisclosure} from '@chakra-ui/react';
export  default function ChiffresCles(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    return(

        <>
     

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>

                    <ModalCloseButton />
                    <ModalBody>
 
                        <Image src={chifres}/>
                        
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
        
        
        
    )
    
    
    
}