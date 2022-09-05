import { Grid, Box, Paper, Button } from '@mui/material';
import * as React from 'react';

const paperStyles = { padding: '10px', margin: '20px 0', backgroundColor: '#5c6bc0', color: 'white' }

function DistantWork() {
   return (<Grid item>
      <Box>
         <Paper elevation={10} style={paperStyles}>
            <Grid container justifyContent={'space-evenly'}>
               <Grid item alignSelf={'center'}>
                  <Box padding={'4.5px 0 0 0'} fontSize='24px'>
                     I'm considering remote work
                  </Box>
               </Grid>
               <Grid item>
                  <Button size='large' color="inherit"><Box borderBottom={1} fontSize='26px'>Hire me</Box></Button>
               </Grid>
            </Grid>
         </Paper>
      </Box>
   </Grid >);
}

export default DistantWork;