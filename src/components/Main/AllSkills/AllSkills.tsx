import { Grid, Box, Paper } from '@mui/material';
import * as React from 'react';
import Skill from './Skill/Skill';
import SkillTitle from './SkillTitle/SkillTitle';

const paperStyles = { padding: '10px', margin: '20px 0', backgroundColor: '#283593', color: 'white' }

function AllSkills() {
   return (
      <Grid item>
         <Box >

            <Paper elevation={10} style={paperStyles}>
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