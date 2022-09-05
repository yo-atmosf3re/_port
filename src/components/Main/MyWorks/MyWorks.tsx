import { Grid, Box, Paper } from '@mui/material';
import * as React from 'react';
import MyWorksTitle from './MyWorksTitle/MyWorksTitle';
import SomeWork from './SomeWork/SomeWork';

function MyWorks() {
   return (
      <Grid item>
         <Box>
            <Paper elevation={10} style={{ padding: '10px', margin: '20px 0', backgroundColor: '#283593', color: 'white' }}>
               <MyWorksTitle />
               <Grid container justifyContent={'space-evenly'}>
                  <SomeWork />
                  <SomeWork />
                  <SomeWork />
               </Grid>
            </Paper>
         </Box>
      </Grid >
   );
}

export default MyWorks;