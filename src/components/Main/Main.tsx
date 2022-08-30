import { Container, Grid, Box, Paper } from '@mui/material';
import * as React from 'react';

function Main() {
   return (
      <Container style={{ height: '100vh' }}>
         <Grid justifyContent='center' fontSize='20px' container direction='column' columns={3} spacing={8}>
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