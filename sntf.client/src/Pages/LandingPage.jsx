import NavBar from "@/Components/NavBar.jsx";
import CaptionCarousel from "@/Components/CaptionCarousel.jsx";
import VisitUs from "@/Components/VisitUs.jsx";
import RecherchTrainBox from "@/Components/RecherchTrainBox.jsx";

import {
    HStack,
    Button,
    Slide,Stack,
    Box
} from '@chakra-ui/react';
import Horraires from "@/Components/Horraires.jsx";
import { motion } from 'framer-motion';
import ServicesSection from "@/Components/ServicesSection.jsx";
import { Grid, GridItem } from '@chakra-ui/react'
import Descorverourtrains from "@/Components/Descorverourtrains.jsx";
import Summary from "@/Components/Summry.jsx";
import Datashowcase from "@/Components/Datashowcase.jsx";
import QA from "@/Components/QA.jsx";
import AvantageesTarifaires from "@/Components/AvantageesTarifaires.jsx";
import JoinOurNewsLetter from "@/Components/JoinOurNewsLetter.jsx";
import Footer from "@/Components/footer.jsx";
function LandingPage() {



    return (
     
     
     
     <>

         <NavBar />

         <Stack spacing='60px'>

             <motion.div
                 initial={{y: -100, opacity: 0}}
                 animate={{y: 0, opacity: 1}}
                 transition={{duration: 0.8, delay: 0.2}}
             >
                 <CaptionCarousel/>
             </motion.div>


             <motion.div
                 initial={{x: 100, opacity: 0}}

                 animate={{x: 0, opacity: 1}}
                 transition={{duration: 0.8, delay: 0.4}}
             >
                 <RecherchTrainBox/>
             </motion.div>


             <motion.div

                 style={{
                     position: 'relative',
                     right: 0,

                 }}
                 initial={{x: -100, opacity: 0}}
                 animate={{x: 0, opacity: 1}}
                 transition={{duration: 0.8, delay: 0.4}}
             >
                 <Horraires/>
             </motion.div>

             <div>
                 <motion.div
                     initial={{x: 100, opacity: 0}}
                     animate={{x: 0, opacity: 1}}
                     transition={{duration: 0.8, delay: 0.8}}
                 >
                     <ServicesSection/>
                 </motion.div>
                 <motion.div


                     initial={{x: 100, opacity: 0}}
                     animate={{x: 0, opacity: 1}}
                     transition={{duration: 0.8, delay: 0.8}}
                 >
                     <Descorverourtrains/>
                 </motion.div>
             </div>


             <motion.div
                 initial={{x: 100, opacity: 0}}
                 animate={{x: 0, opacity: 1}}
                 transition={{duration: 0.8, delay: 0.8}}
             >
                 <Summary></Summary>
             </motion.div>


             <motion.div
                 initial={{x: 100, opacity: 0}}
                 animate={{x: 0, opacity: 1}}
                 transition={{duration: 0.8, delay: 0.8}}
             >
                 <Datashowcase></Datashowcase>
             </motion.div>


             <motion.div
                 initial={{x: 100, opacity: 0}}
                 animate={{x: 0, opacity: 1}}
                 transition={{duration: 0.8, delay: 0.8}}
             >
                 <QA></QA>
             </motion.div>


             <motion.div
                 initial={{x: 100, opacity: 0}}
                 animate={{x: 0, opacity: 1}}
                 transition={{duration: 0.8, delay: 0.8}}
                 style={{marginBottom: '20px'}}
             >
                 <AvantageesTarifaires></AvantageesTarifaires>
             </motion.div>


             <motion.div
                 initial={{x: 100, opacity: 0}}
                 animate={{x: 0, opacity: 1}}
                 transition={{duration: 0.8, delay: 0.8}}
             >
                 <JoinOurNewsLetter></JoinOurNewsLetter>
             </motion.div>


             <motion.div >

                 <Footer>
                     
                 </Footer>

             </motion.div>


         </Stack>


      


         <Box>

             <VisitUs zIndex='5'/>

         </Box>


     </>


    );
}

export default LandingPage;