import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Card, CardHeader, Highlight, Heading, CardBody, Button, CardFooter, Grid, Image, Text, Box } from '@chakra-ui/react'
import { useState, useEffect, useRef } from "react";
import { useDisclosure, useColorMode } from '@chakra-ui/react';
import { HStack,Stack, GridItem, Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react';
import traincivil from '@/assets/STADLER.jpg';
import trainrapid from '@/assets/CAF.jpg';
import trainmerch from '@/assets/DR.jpg';
import trainold from '@/assets/DS.jpg';

export default function Descorverourtrains() {
    const { colorMode } = useColorMode();
 
    const [showDiv, setShowDiv] = useState(false);
    const [divPosition, setDivPosition] = useState('100%');
    const [selectedData, setSelectedData] = useState({
        Titre1: '',
        image: '',
        Paragraph1: '',
        Paragraph2: '',
        Paragraph3: '',
        Paragraph4: '',
        Paragraph5: '',
        
    });
    useEffect(() => {
        if (showDiv) {
            setDivPosition('0%');
        } else {
            setDivPosition('30%');
        }
    }, [showDiv]);


    const handleClick = (item) => {
        setShowDiv(true);
        setSelectedData(item);
   

        console.log(selectedData.Paragraph)
        
        if(showDiv && item.Titre1 === selectedData.Titre1){
            
            setShowDiv(false);
        }
        
    };

    const data = [
        {
            Titre1: 'TRAINS DE BANLIEUES',
            
            image: traincivil,
            
            Paragraph1:'Assuré par les trains FLIRT (abréviation de l\'allemand Flinker Leichter Innovativer Regional-Triebzug, qui signifie « automotrice innovante agile et légère pour trafics régionaux »), un train conçu et construit par l\'entreprise Suisse Stadler Rail.\n' +
                '\n' +
                'La vitesse maximale du FLIRT est de 160 km/h. Les rames disposent d\'attelages automatiques pour former des unités multiples.\n' +
                '\n' +
                'Le FLIRT est un train articulé composé de deux à six voitures (ou caisses) avec une motorisation répartie.\n' +
                '\n' +
                'Des variations du FLIRT sont en service en Suisse, Allemagne, Italie, Autriche, Hongrie, Pologne, Finlande, Norvège et Algérie.\n' +
                '\n' +
                'En 2006, la SNTF a commandée 64 rames pour le réseau de banlieue d\'Alger. Les premières sont livrées en 2010.',
            
            Titre2:'Banlieue d’Alger',
            
            Paragraph2:'La banlieue algéroise connait un important flux de voyageurs 32.6 millions de voyageurs équivalent à 91 000 voyageurs par jour et 900 voyageurs par train.\n' +
                '\n' +
                'La progression annuelle du transport des passagers sur le réseau de la banlieue Algéroise continue d’engranger des parts de marché compte tenu de leurs services bien adaptés aux besoins spécifiques d’une clientèle constituée en grande majorité de voyageurs contractuels, d’étudiants, de corps constitués et de travailleurs, …etc\n' +
                '\n' +
                '- Nombre de gares desservies par Automotrices : 26 gares desservies.\n' +
                '\n' +
                '• L’axe Alger-El Harrach: Alger - Agha - Ateliers - Hussein.Dey - Caroubier -El Harrach.\n' +
                '• BANLIEUE OUEST : Gué de Constantine - Ain Naâdja - Baba Ali - Birtouta - Boufarik -Beni Mered - Blida - Chiffa - Mouzaia - El Affroun.\n' +
                '• BANLIEUE EST : Oued Smar - Bab Ezzouar - Dar El Beida - Rouiba - Réghaia -Boudouaou - Corso - Boumerdes - Tidjelabine - Thénia.\n' +
                'L’automotrices électrique représente une alternative plus sure et plus confortable par rapport aux modes routiers urbains classiques.\n' +
                '\n' +
                'Parcours par Automotrices sur la Banlieue d’Alger\n' +
                '\n' +
                '• 54 Km - Alger / Thénia.\n' +
                '• 68 Km - Alger / El Affroun.'
            
            ,
            
            Titre3: 'Autres banlieues',
            
            Paragraph3:'Banlieue Constantinoise : 12 gares desservies\n' +
                '\n' +
                '• Banlieue Est : Constantine - Bekira - Hamma Bouziane - Kef Salah - Didouche Mourad - Zighoud Youcef.\n' +
                '• Banlieue Ouest : Chalet des Pins - Sidi Mabrouk - Oued Hamimine - El Khroub - - Ouled Rahmoune.\n' +
                'Banlieue Bônoise : 06 gares desservies.\n' +
                '\n' +
                'Annaba - Boukhadra - Sidi Achour - El Bouni - Chaiba - Sidi Amar.\n' +
                'Banlieue Oranaise : 09 gares desservies.\n' +
                '\n' +
                'Oran - Hai El Sabah - Garita - Hassi Bounif - Hassi Ameur - Hassi Ben Okba - Gdyel - Hassi Mafsoukh - El Mouhgoun.\n' +
                '\n' +
                'Parcours par trains diesel sur les autres Banlieues\n' +
                '• Région Ferroviaire de Annaba 15 km au départ ou vers Annaba.\n' +
                '• Région Ferroviaire de Constantine 50 km au départ ou vers Constantine.\n' +
                '• Région Ferroviaire d’Oran 38 km au départ ou vers Oran.'
            
            ,
        
             Date:'18 février 2018'
            
            
            
            
        },

        {
          
            Titre1: 'TRAINS RÉGIONAUX' ,
            image: trainrapid,
            Paragraph1:'Assuré par le train CAF ZZ 22, Ils peuvent être couplés jusqu\'à 3 unités (9 voitures) par des accouplements automatiques.\n' +
                '\n' +
                'Ils sont destinés à la qualité du trafic régional et disposent de la climatisation et d\'un système d’information voyageur.\n' +
                '\n' +
                'Chaque unité possède quatre moteurs 338 kW et la vitesse maximale est de 160 km / h.\n' +
                '\n' +
                '\n' +
                '• 28-11-2007 Réception de la première unité à Alger.\n' +
                '• 17/01/2008 approbation de la seconde unité livrée SNTF.\n' +
                '• 30-01-2008 Voyage Alger - Blida dans 28 minutes à une vitesse moyenne de 140 km / h.\n' +
                '• 03/02/2008 Record de vitesse Algérien en atteignant 177 km/h entre Chlef et Oran.\n' +
                '• 10-03-2008 Mise en service entre Alger et Sétif (~ 300 km), avec un temps de parcours de 3h33 .',

            Titre2:'Service Régional',
            
            Paragraph2: 'La SNTF met quotidiennement à la disposition de sa clientèle :',
            
            Titre3:'rains Autorails :',
            
            Paragraph3:'Relations desservies :\n' +
                '\n' +
                '04 Autorails pour la Région Ferroviaire d’Alger sur les relations : Alger /Bejaia - Alger/ Sétif - Alger/Chlef - Alger/ M’sila /Batna.\n' +
                '02 Autorails pour la Région Ferroviaire d’Oran sur les relations : Oran / Chlef - Oran / Maghnia.\n' +
                '02 Autorails pour la Région Ferroviaire de Constantine sur les relations : Constantine /Biskra.' ,
            Titre4:'Trains Diesel Régionaux :',
            Paragraph4:'Relations desservies :\n' +
                '\n' +
                'Alger : Chlef -Khemis / Alger-Bouira / Beni Mansour- Bouira / Bordj Bou Arréridj-M\'sila.\n' +
                'Constantine : Touggourt Biskra / Batna-Ain Touta.\n' +
                'Oran : Oran-Tlemcen/ Oran-Sidi-Bel-Abbès / Tlemcen-Ghazaouet / Oran-Rélizane / Oran-Ain Temouchenet.\n' +
                'Annaba : Annaba-Tébessa / Annaba-Chihani / Souk Ahras-Sidi Hmissi.' 
            ,
            
            Date: '18 février 2018'
            
        },

        {
            Titre1: 'TRAINS DE GRANDES LIGNES',
            
            image: trainold,

            Paragraph1:'Assurés par les locomotives diesel-électrique GM-EMD (General Motors Electro-Motive Division), et des voitures DEV INOX.\n' +
                '\n' +
                'Les trains sont robustes d’une puissance considérable pour assurer les trajets de longues distances aller-retour.\n' +
                '\n' +
                'La SNTF met quotidiennement à la disposition de sa clientèle 12 trains Grandes Lignes\n' +
                '\n' +
                'Relations desservies :\n' +
                '\n' +
                '• 8 trains sur la relation Alger-Oran et retour (Dont 4 trains confort)\n' +
                '• 2 trains sur la relation Alger-Constantine et retour.\n' +
                '• 2 trains sur la relation Alger-Annaba et retour. (Offrant des compartiments couchettes de 1° et 2° classe, et des voitures places assises).\n' +
                '\n' +
                'Des travaux de réhabilitation et de modernisation sont en cours au niveau de nos Ateliers de Maintenance Ferroviaire de sidi Bel Abbès par une main d’œuvre 100% Algérienne.\n' +
                '\n' +
                'Les voitures réhabilitées sont équipées de la climatisation, système d’information voyageur et des prises électriques et USB. Et sont injectées au fur et à mesure au service de notre clientèle.',
            
            Paragraph2: 'la SNTF a fait une commande de 17 trains « Coradia Polyvalent » en 2015 à Alstom, en vue de rénover et d’étendre son réseau. La mise en service de ces trains nouvelle génération est prévue dès janvier 2018, ils relieront entre autres Alger aux villes de Constantine, Oran, Annaba ainsi que Bechar.',
            
            
            Date: '18 février 2018'



        },

        {
            Titre1: 'TRAINS MARCHANDISES',

            image: trainmerch,
            
            Paragraph1: 'Dans le domaine du transport des marchandises, la SNTF met à la disposition du client plus de 11 000 wagons très variés, appropriés aux différentes exigences de transport et à des prix compétitifs.\n' +
                '\n' +
                'La SNTF transporte annuellement plus de cinq millions de tonne de marchandises de toutes natures. Les principales marchandises transportées :\n' +
                '\n' +
                'Produits minéraliers (Minerai de fer, phosphate, Pouzzolane)\n' +
                '\n' +
                'Produits Energétiques (Carburant, Lubrifiant, Produits Spéciaux)\n' +
                '\n' +
                'Produits Céréaliers (Blé, Orge, Semoule, Farine)\n' +
                '\n' +
                'Marchandises Conteneurisées\n' +
                '\n' +
                'Produits Divers (Engrais, Ciment, Produits Sidérurgiques, Rail, Ballast, Sable…)\n' ,
                 
   
            Date: '18 février 2018'
            
        }
        
        
        
        
    ]

    
    
    return (

        <>
         
            <Stack spacing={2} p={2} className="main-hstack" mt={16} direction={{

                base:'column' , sm: 'column',
                md: 'column',
                lg: 'row',
                xl: 'row',
                '2xl': 'row'
                
            }} width={{base: '100%', sm: 'auto'}}>
                <Box width={{base:'100%' , sm: '100%',
                    md: '100%',
                    lg: '50%',
                    xl: '50%',
                    '2xl': '50%'}}
                     textAlign="left"
                     p='0px 100px 0px 20px'
                     bgGradient="linear(to-l, #0C356A, #070F2B)"
                     height='350px'
                     borderRadius='10px'
                     display="flex"
                     alignItems="center"
                     position="relative"
                     
                     
                >

                    {showDiv && (

                        <Box width={{base:'100%' , sm: '100%',
                            md: '100%',
                            lg: '100%',
                            xl: '100%',
                            '2xl': '100%',}}
                             height='350px'
                             position='absolute'
                            top='0'
                            left={divPosition}
                            transition='left 0.4s ease-in-out'


                            bg='#00224d'
                             borderRadius='10px'
                            zIndex={1}
                            padding={6}

                            color='white'

                            overflowY='auto'
                            css={{
                                '&::-webkit-scrollbar': {
                                    width: '10px',
                               
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

                            <Heading fontSize='15px' align='center'>{selectedData.Titre1}</Heading>
                            <Image src={selectedData.image} alt={selectedData.Titre1} mb={4}/>
                            <Text>{selectedData.Paragraph1}</Text>
                            <Heading size='m'>{selectedData.Titre2}</Heading>
                            <Text>{selectedData.Paragraph2}</Text>
                            <Heading size='m'>{selectedData.Titre3}</Heading>
                            <Text>{selectedData.Paragraph3}</Text>
                            <Heading size='m'>{selectedData.Titre4}</Heading>
                            <Text>{selectedData.Paragraph4}</Text>
                            <Heading size='m'>Date</Heading>

                            <Text>{selectedData.Date}</Text>


                        </Box>
                    )}

                    <Heading lineHeight='tall' color='white'>

                        <Highlight
                            fontWeight='bold'
                            query='TRAINS'
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
                            DÉCOUVREZ NOS TRAINS
                        </Highlight>

                    </Heading>


                </Box>

                <Box width={{base:'100%' , sm: '100%',
                    md: '100%',
                    lg: '50%',
                    xl: '50%',
                    '2xl': '50%',}}
                     borderRadius='10px'
                    justifyContent="center"
                     height='350px'
                    display="flex"
                    alignItems="center"
                    style={{
                        background:  'linear-gradient(to left,#1C519A, #0E1844)' ,
                        backdropFilter: 'blur(200px)',
                        whiteSpace: 'nowrap',
                        boxShadow: '5px 2px 10px rgba(0, 0, 0, 0.2)',
                    }}
                >

                    <Grid
                        m='5em'
                        templateColumns='repeat(2, fr)' gap={6}>
                        {data.map((item, index) => (
                            <Button 
                                bg='transparent' 
                                color='white'
                                fontSize={{
                                    base: '15px',
                                    sm:'18px', 
                                    md: '20px',
                                    lg: '25px',
                                    xl: '25px', 
                                    '2xl': '25px'
                            }}
                                    _hover={{bg: 'transparent'}} key={index}
                                    onClick={() => handleClick(item)}>


                                <Text
                                    position="relative"
                               
                                    color="white"
                                    cursor="default"
                                    _after={{
                                        content: '""',
                                        position: 'absolute',
                                        bottom: 0,
                                        left: '50%',
                                        width: 0,
                                        height: '2px',
                                        backgroundColor: 'blue.600',
                                        transition: 'width 0.3s ease, left 0.3s ease',
                                    }}
                                    _hover={{
                                        _after: {
                                            width: '100%',
                                            left: 0,
                                        },
                                    }}
                                >
                            
                                        {item.Titre1}
                               
                                </Text>
                            </Button>

                        ))}
                    </Grid>
                </Box>
            </Stack>


        </>
    )
}