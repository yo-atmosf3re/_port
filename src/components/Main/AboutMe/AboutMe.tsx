import { Grid, Box, Paper } from '@mui/material';
import * as React from 'react';

function AboutMe() {
   return (
      <Grid item>
         <Box>
            <Paper elevation={10} style={{ padding: '10px', margin: '30px 0', backgroundColor: '#78909c', color: 'white' }}>
               <Grid container alignItems='center' justifyContent='space-between'>
                  <Grid item >
                     <Grid item>
                        <span>Hi There</span>
                     </Grid>
                     <Grid item>
                        <h1>I am Alexandr Shishov</h1>
                     </Grid>
                     <Grid item>
                        <p>Frontend developer</p>
                     </Grid>
                  </Grid>
                  <Grid item sx={{ width: '300px' }}>
                     <Grid item>
                        My photo
                     </Grid>
                  </Grid>
               </Grid>
            </Paper>
         </Box>
      </Grid >
   );
}

export default AboutMe;