import { Grid, Box, Paper } from '@mui/material';
import * as React from 'react';

function Skills() {
   return (
      <Grid item>
         <Box>
            <Paper elevation={10} style={{ padding: '10px', margin: '20px 0', backgroundColor: '#78909c', color: 'white' }}>
               Skills
            </Paper>
         </Box>
      </Grid>
   );
}

export default Skills;