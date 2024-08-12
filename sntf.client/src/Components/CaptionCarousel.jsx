import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
 import bg from '@/assets/bg-CaWz3XAG.png'
import { LinkBox, LinkOverlay,Image } from '@chakra-ui/react'
import bg2 from '@/assets/bg2.png'
// Here we have used react-icons package for the icons
import { ChevronRightIcon,ChevronLeftIcon } from '@chakra-ui/icons'
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { useDisclosure, useColorMode } from '@chakra-ui/react';
// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function CaptionCarousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState();

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });

    const carouselHeight = useBreakpointValue({ base: '300px', md: '400px', lg: '720px' });
    // These are the images used in the slide
    const cards = [
        {image : bg},
        {image: bg2}
    ];


    const { colorMode } = useColorMode();
    return (


     
        
        <Box position="relative"

            
             
         
             
             
             width="full" mt='2em'>
      
.
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />

            <ChevronLeftIcon
                aria-label="left-arrow"
          bg='blue.400'
                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}
            />

            <ChevronRightIcon
                aria-label="right-arrow"
             
                borderRadius="full"
                position="absolute"
                bg='blue.400'
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}
            />

            {/* Slider */}
<Slider {...settings} ref={(slider) => setSlider(slider)}>
    {cards.map((card, index) => (
        <LinkBox key={index} as="article"  >
            <LinkOverlay href='#'>
                <Image
           
                    
                    height={carouselHeight}
                    position="relative"
                    
                    objectFit="cover"
                    backgroundPosition="center"
                    src={card.image}
                />
            </LinkOverlay>
        </LinkBox>
    ))}
</Slider>
</Box>


);
}


