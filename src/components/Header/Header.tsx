import { Box, AppBar, Toolbar, IconButton, Typography, Grid, Button } from '@mui/material';
import * as React from 'react';

function Header() {
   return (
      <Box >
         <AppBar color='secondary' position="relative">
            <Toolbar>
               <IconButton
                  size="small"
                  edge="start"
                  color="default"
               >
               </IconButton>
               <Typography px={{ xs: 3, sm: 20 }} variant="h5" component="div" sx={{ flexGrow: 3, mx: 'auto' }}>
                  Header
               </Typography>
               <Grid py={{ xs: 2, sm: 3.5 }} spacing={0.4} container justifyContent={'space-evenly'}>
                  <Grid item>
                     <Button size='large' color="inherit"><Box borderBottom={1}>Main</Box></Button>
                  </Grid>
                  <Grid item>
                     <Button size='large' color="inherit"><Box borderBottom={1}>Skills</Box></Button>
                  </Grid>
               </Grid>
               <Grid spacing={0.4} container justifyContent={'space-evenly'}>
                  <Grid item>
                     <Button size='large' color="inherit"> <Box borderBottom={1}>Projects</Box> </Button>
                  </Grid>
                  <Grid item>
                     <Button size='large' color="inherit"><Box borderBottom={1}>Contacts</Box></Button>
                  </Grid>
               </Grid>
            </Toolbar>
         </AppBar>
      </Box>
   );
}

export default Header;