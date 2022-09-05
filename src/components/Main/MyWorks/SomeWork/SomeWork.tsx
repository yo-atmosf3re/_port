import { Grid, Box, Paper } from '@mui/material';
import * as React from 'react';

function SomeWork() {
   const someWorkStyles = {
      padding: '10px',
      margin: '20px 0',
      backgroundColor: '#5c6bc0',
      color: 'white',
   }
   return (<div>
      <Grid item style={{ width: '300px', height: '400px' }}>
         <Box>
            <Paper elevation={5} style={someWorkStyles}>
               <Grid alignItems={'center'} container spacing={2} direction={'column'}>
                  <Grid item>Icon from props</Grid>
                  <Grid item>Title of my work from props</Grid>
                  <Grid item>Description from props</Grid>
               </Grid>
            </Paper>
         </Box>
      </Grid>
   </div>);
}

export default SomeWork;