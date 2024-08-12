
import { SocialIcon } from 'react-social-icons'
import { useDisclosure } from '@chakra-ui/react';
import { useState, useEffect } from 'react'
import {

    HStack,
    Button,Slide,Box
} from '@chakra-ui/react'


export  default  function VisitUs(){
    const { isOpen, onToggle } = useDisclosure()

    const [slideBottom, setSlideBottom] = useState('0px');
    

    useEffect(() => {

        setSlideBottom(isOpen ? '80px' : '0px');
    }, [isOpen]);





    return(

        <Box   display='flex' justifyContent='center' alignItems= 'flex-end'>
            <Button
                position="fixed"
                direction='bottom'
                mb={1}
                zIndex='5'
                onClick={onToggle}
               

                bg='#00224D' color='white'  _hover={{bg:'#0B60B0'}}
                
                
                
                style={{
                    bottom: slideBottom,


                    transition: 'all 0.2s ease-in-out'
                }}
            >
                visitez-nous
            </Button>

            <Slide direction='bottom' in={isOpen}>
                <Box
                    p='10px'
                    color='white'

                    mt='2'
          
                    rounded='md'
                    shadow='md'
                >
                    <HStack justifyContent="center" >
                        <SocialIcon  url="https://www.facebook.com/sntf.officiel/" />
                        <SocialIcon url="https://www.linkedin.com/company/ondefoc1/?viewAsMember=true"/>
                        <SocialIcon url="https://www.instagram.com/sntf.officiel/" />
                        <SocialIcon url="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html" />
                        <SocialIcon url="https://play.google.com/store/apps/details?id=dz.sntf.cs&pli=1"/>
                        <SocialIcon url="https://www.youtube.com/channel/UCTiMxT9NK3KtPhGa5dnoOGw"/>
                        <SocialIcon url="https://twitter.com/sntf_officiel"/>
                    
                      
                    </HStack>
                </Box>
            </Slide>
        </Box>


    );
}