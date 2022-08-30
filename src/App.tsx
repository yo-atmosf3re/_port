import React from 'react';
import './App.css';
import { AppBar, Box, Button, Container, createTheme, Grid, IconButton, Paper, ThemeProvider, Toolbar, Typography } from '@mui/material';
import s from './App.module.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  const theme = createTheme(
    {
      palette: {
        primary: {
          main: '#78909c',
        },
        secondary: {
          main: '#607d8b',
        },
      },
    }
  )

  return (
    <div className={s.body}>
      <ThemeProvider theme={theme}>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </div >
  );
}

export default App;


{/* <Box>
          <Container sx={{ width: 'auto' }} className={s.footer}>
            <Grid maxWidth='xl' container>
              <Grid item xs={12} fontSize='14px'>
                {<footer >
                  <Box textAlign='center' px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} bgcolor='#0277bd' color='white'>
                    <Container maxWidth='lg'>
                      <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                          <Box>Help</Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Box>Help</Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Box>Help</Box>
                        </Grid>
                      </Grid>
                    </Container>
                  </Box>
                </footer>}
              </Grid>
            </Grid>
          </Container>
        </Box> */}
{/* <Box>
          <Toolbar style={{ position: 'static', backgroundColor: '#607d8b', height: '8vh', color: 'white' }}></Toolbar>
        </Box> */}