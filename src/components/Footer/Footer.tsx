import { Box, AppBar, Toolbar, Button } from '@mui/material';
import * as React from 'react';

const boxStyles = { margin: '0 auto' }

function Footer() {
   return (
      <Box>
         <AppBar color='secondary' position="relative">
            <Toolbar>
               <Box style={boxStyles} justifyContent={'center'} px={{ xs: 8, sm: 100 }} py={{ xs: 2, sm: 4 }}>
                  <Button size='large' color="inherit">Lorem</Button>
                  <Button size='large' color="inherit">Lorem</Button>
                  <Button size='large' color="inherit">Lorem</Button>
                  <Box fontSize={'14px'} justifyContent={'center'} pt={{ xs: 5, sm: 3 }} pb={{ xs: 4, sm: 0 }}>
                     Lorem ipsum dolor sit amet. &reg; {new Date().getFullYear()}
                  </Box>
               </Box>
            </Toolbar>
         </AppBar>
      </Box>
   );

}

export default Footer;