import {
    Highlight,
    Heading,
    Text,
    Box,
    Grid,
    GridItem,
    Image,
    useColorMode
} from '@chakra-ui/react';
import train1 from '@/assets/coradia01.jpg';
import train2 from '@/assets/coradia02.jpg';
import train3 from '@/assets/coradia03.jpg';
import train4 from '@/assets/coradia04.jpg';

export default function Summary() {
    const { colorMode } = useColorMode();

    return (
        <>
            <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
                <Box
                    p="0px 30px"
                    textAlign="center"
                    borderRadius={20}
                    width="100%"
                    maxWidth="1200px"
                >
                    <Heading lineHeight="tall">
                        <Highlight
                            query="TRAINS"
                            styles={{
                                px: '2',
                                py: '2',
                                rounded: '15px',
                                bg: colorMode === 'light' ? '#8cc4e4' : '#0f3261',
                                color: colorMode === 'light' ? 'black' : 'white',
                                fontFamily: 'Poppins',
                            }}
                        >
                            DES NOUVEAUX TRAINS POUR LES GRANDES LIGNES
                        </Highlight>
                    </Heading>

                    <Text
                        textAlign="center"
                        fontFamily="Poppins"
                        mt="50px"
                    >
                        Le nouveau train « grandes lignes » Coradia est un train
                        polyvalent grandes lignes bi-mode (diesel/ électrique 25 KV) avec
                        une vitesse de 160 km/h. D’une longueur de 110 m, il comporte 6 voitures et
                        offre une capacité de 254 passagers
                        dont 60 en première classe. Il est adapté aux conditions climatiques
                        du pays (sable, températures élevées) et dispose d’un système de climatisation
                        très performant ainsi que les commodités nécessaires pour faciliter l’accès et
                        le déplacement à bord, en particulier pour les personnes à mobilité réduite (PMR).
                    </Text>
                </Box>

                <Box
                    width="100%"
                    maxWidth="1200px"
                    mt="20px"
                >
                    <Grid
                        templateRows="repeat(2, 1fr)"
                        templateColumns="repeat(5, 1fr)"
                        gap={1}
                    >
                        <GridItem rowSpan={2} colSpan={1}>
                            <Image
                                src={train3}
                                style={{
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Image
                                src={train1}
                                height="100%"
                                width="100%"
                                objectFit="cover"
                            />
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Image
                                src={train2}
                                height="100%"
                                width="100%"
                                objectFit="cover"
                            />
                        </GridItem>
                        <GridItem colSpan={4}>
                            <Image
                                src={train4}
                                height="300px"
                                width="100%"
                                objectFit="cover"
                            />
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}
