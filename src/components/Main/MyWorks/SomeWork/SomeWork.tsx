import { Grid, Box, Paper } from '@mui/material';
import * as React from 'react';

const someWorkStyles = {
   padding: '10px',
   margin: '20px 0',
   backgroundColor: '#5c6bc0',
   color: 'white',
}

const gridItemStyles = {
   width: '300px',
   height: '400px'
}

function SomeWork() {
   return (<div>
      <Grid item style={gridItemStyles}>
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