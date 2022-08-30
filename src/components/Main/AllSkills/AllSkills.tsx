import { Grid, Box, Paper } from '@mui/material';
import * as React from 'react';
import Skill from './Skill/Skill';
import SkillTitle from './SkillTitle/SkillTitle';

function AllSkills() {
   return (
      <Grid item>
         <Box >

            <Paper elevation={10} style={{ padding: '10px', margin: '20px 0', backgroundColor: '#78909c', color: 'white' }}>
               <SkillTitle />
               <Grid container justifyContent={'space-evenly'}>
                  <Skill />
                  <Skill />
                  <Skill />
                  <Skill />
                  <Skill />
                  <Skill />
               </Grid>
            </Paper>
         </Box>
      </Grid>
   );
}

export default AllSkills;