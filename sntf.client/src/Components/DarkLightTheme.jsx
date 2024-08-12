/* eslint-disable no-unused-vars */
import React from 'react';
import { MoonIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import {
 
    IconButton, useColorMode,

} from '@chakra-ui/react';
function DarkLightTheme() {

    const { toggleColorMode } = useColorMode()



  return (

      <IconButton
          icon={<MoonIcon />}
          onClick={toggleColorMode}
           style={{
          //     position: 'absolute',
          //     top: '0px',
          //     right: '5px',
              backgroundColor: 'transparent',
               
           }}
          _focus={{ backgroundColor:'none' }}
          color='white'
      >
      </IconButton>

  );
}

export default DarkLightTheme;