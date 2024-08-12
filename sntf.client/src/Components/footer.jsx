import { Stack,Box, Flex, Text,Image, Link } from "@chakra-ui/react";

import SNTFBanner from '@/assets/SNTF_Banner_logo.png'
export default  function  Footer()  {
    return (
        <Box
            as="footer"
            bg="gray.800"
            color="white"
            bgGradient="linear(to-l, #0C356A, #070F2B)"
            py={{ base: 8, md: 12 }}
            px={{ base: 4, md: 8 }}
        >
            <Flex
                direction={{ base: "column" }}
                justify="space-between"
                align="left"
                
                mb={{ base: 8, md: 12 }}
            >
                <Box mb={4}>
                    <Image
                       h={6}
                        fontWeight="bold"
                        src={SNTFBanner}
                        mb={{ base: 2, md: 0 }}
                        animation="fadeInLeft 0.5s ease-in-out"
                    >
                       
                    </Image>
                </Box>

                <Stack>
                    <Box mb={3}>

                        <Text>21. 23, Boulevard Mohamed V, Alger</Text>
                    </Box>
                    <Box mb={3}>

                        <Text>(213) 21 71 15 10</Text>
                    </Box>
                    <Box mb={3}>

                        <Text>(213) 21 73 32 98</Text>
                    </Box>
                    <Box mb={3}>

                        <Link href="mailto:contact@sntf.dz">contact@sntf.dz</Link>
                    </Box>
                    <Box mb={3}>

                        <Link href="http://www.sntf.dz" isExternal>
                            www.sntf.dz
                        </Link>
                    </Box>
                    
                </Stack>
              
                
                
            </Flex>
            <Text
                fontSize="sm"
                display='flex' justifyContent='center' 
               
                textAlign={{ base: "center", md: "left" }}
                animation="fadeIn 0.5s ease-in-out 0.2s"
            >
                © SNTF, 2018. Tous Droits Réservés.
            </Text>
        </Box>
    );
};

