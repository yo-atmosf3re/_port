import { Container, Grid, Box, Paper } from '@mui/material';
import * as React from 'react';
import AboutMe from './AboutMe/AboutMe';
import AllSkills from './AllSkills/AllSkills';
import Contacts from './Contacts/Contacts';
import DistantWork from './DistantWork/DistantWork';
import MyWorks from './MyWorks/MyWorks';

function Main() {
   return (
      <Container >
         <Grid justifyContent='center' fontSize='20px' container direction='column' columns={3} spacing={5}>
            <AboutMe />
            <AllSkills />
            <MyWorks />
            <DistantWork />
            <Contacts />
         </Grid>
      </Container>
   );
}

export default Main;