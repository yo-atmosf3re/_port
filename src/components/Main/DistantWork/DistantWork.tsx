import { Grid, Box, Paper } from '@mui/material';
import * as React from 'react';

function DistantWork() {
   return (<Grid item>
      <Box>
         <Paper elevation={1} style={{ padding: '10px', margin: '20px 0' }}>
            Lorem paper
         </Paper>
      </Box>
   </Grid>);
}

export default DistantWork;