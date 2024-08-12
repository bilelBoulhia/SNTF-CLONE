import { Card, CardHeader, Heading, CardBody, Button, CardFooter, Grid, Image, Text } from '@chakra-ui/react'
import gare from '@/assets/Gare.png';
import train from '@/assets/trainInside.jpg';

export default function ServicesSection() {
    return (
        <>
            <Heading fontFamily='Poppins' align='center'  mb={5}>services</Heading>
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={6}>
                <Card align='center'>
                    <CardHeader>
                        <Heading size='md' fontFamily='poppins'> EN GARE</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image align='center' src={gare} />
                        <Text>Plus d'une centaine de gares voyageurs dévoilent le réseau ferroviaire de la SNTF.
                            Dans la plupart
                            des gares, vous trouvez des équipements fonctionnels et des services pratiques pour faciliter votre voyage avant et pendant votre départ.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button bg='#00224D' color='white' onClick={() => window.location.href = 'https://www.sntf.dz/index.php/a-bord-du-train'} _hover={{bg:'#0B60B0'}}>Lire Plus</Button>
                    </CardFooter>
                </Card>

                <Card align='center'>
                    <CardHeader>
                        <Heading size='md' fontFamily='poppins'> À BORD DU TRAIN</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src={train} />
                        <Text>La SNTF poursuit ses efforts relatifs à la modernisation des moyens de transport
                            en s'alignant sur les standards internationaux aussi bien au niveau des équipements de bord que du confort ; Et ce afin de toujours mieux répondre aux attentes des voyageurs.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button onClick={() => window.location.href = 'https://www.sntf.dz/index.php/en-gare'} bg='#00224D' color='white'  _hover={{bg:'#0B60B0'}}>Lire Plus</Button>
                    </CardFooter>
                </Card>
            </Grid>
        </>
    );
}