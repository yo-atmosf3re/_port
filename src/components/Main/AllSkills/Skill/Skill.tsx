import { Grid, Box, Paper } from '@mui/material';
import * as React from 'react';

function Skill() {
   const skillStyles = {
      padding: '10px',
      margin: '20px 0',
      backgroundColor: '#607d8b',
      color: 'white',
   }
   return (<div>
      <Grid item style={{ width: '300px', height: '400px' }}>
         <Box>
            <Paper elevation={5} style={skillStyles}>
               <Grid alignItems={'center'} container spacing={2} direction={'column'}>
                  <Grid item>Icon from props</Grid>
                  <Grid item>The skill itself from props</Grid>
                  <Grid item>Description from props</Grid>
               </Grid>
            </Paper>
         </Box>
      </Grid>
   </div >);
}

export default Skill;