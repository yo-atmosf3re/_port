import { Grid, Box, Paper } from '@mui/material';
import * as React from 'react';

const paperStyles = { padding: '10px', margin: '20px 0' }

function Contacts() {
   return (<Grid item>
      <Box>
         <Paper elevation={1} style={paperStyles}>
            Lorem paper
         </Paper>
      </Box>
   </Grid>);
}

export default Contacts;