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
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum unde aliquid incidunt ea hic, tempore quae odio iste ratione quidem, esse ipsam recusandae, blanditiis molestiae deleniti. Nihil beatae doloribus temporibus molestias ab, pariatur repudiandae fugit, molestiae quo ipsa et vero harum accusantium. Repellat quam minima iste amet, velit perferendis odit.
            </Paper>
         </Box>
      </Grid>
   </div>);
}

export default Skill;