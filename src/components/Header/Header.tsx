import { Box, AppBar, Toolbar, IconButton, Typography, Grid, Button } from '@mui/material';
import * as React from 'react';

function Header() {
   return (
      <Box >
         <AppBar color='secondary' position="relative">
            <Toolbar>
               {/* <Typography px={{ xs: 3, sm: 20 }} variant="h5" component="div" sx={{ flexGrow: 3, mx: 'auto' }}>
                  Header
               </Typography> */}
               <Grid py={{ xs: 2, sm: 3 }} spacing={0.4} container sx={{ justifyContent: 'space-evenly', fontSize: '20px' }}>
                  <Grid item>
                     <Button size='large' color="inherit"><Box borderBottom={1} fontSize='18px'>Main</Box></Button>
                  </Grid>
                  <Grid item>
                     <Button size='large' color="inherit"><Box borderBottom={1} fontSize='18px'>Skills</Box></Button>
                  </Grid>
               </Grid>
               <Grid py={{ xs: 2, sm: 3 }} spacing={0.4} container
                  sx={{ justifyContent: 'space-evenly' }} >
                  <Grid item>
                     <Button size='large' color="inherit"> <Box borderBottom={1} fontSize='18px'>Projects</Box> </Button>
                  </Grid>
                  <Grid item>
                     <Button size='large' color="inherit"><Box borderBottom={1} fontSize='18px'>Contacts</Box></Button>
                  </Grid>
               </Grid>
            </Toolbar>
         </AppBar>
      </Box>
   );
}

export default Header;