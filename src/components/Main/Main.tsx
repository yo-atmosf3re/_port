import { Container, Grid, Box, Paper } from '@mui/material';
import * as React from 'react';
import AboutMe from './AboutMe/AboutMe';
import AllSkills from './AllSkills/AllSkills';

function Main() {
   return (
      <Container >
         <Grid justifyContent='center' fontSize='20px' container direction='column' columns={3} spacing={5}>
            <AboutMe />
            <AllSkills />
            <Grid item>
               <Box>
                  <Paper elevation={1} style={{ padding: '10px', margin: '20px 0' }}>
                     Lorem paper
                  </Paper>
               </Box>
            </Grid>
            <Grid item>
               <Box>
                  <Paper elevation={1} style={{ padding: '10px', margin: '20px 0' }}>
                     Lorem paper
                  </Paper>
               </Box>
            </Grid>
            <Grid item>
               <Box>
                  <Paper elevation={1} style={{ padding: '10px', margin: '20px 0' }}>
                     Lorem paper
                  </Paper>
               </Box>
            </Grid>
         </Grid>
      </Container>
   );
}

export default Main;