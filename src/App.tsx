import React from 'react';
import './App.css';
import { AppBar, Box, Button, Container, createTheme, Grid, IconButton, Paper, ThemeProvider, Toolbar, Typography } from '@mui/material';
import s from './App.module.css'

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
    <div>
      <ThemeProvider theme={theme}>
        {/* HEADER */}
        <Box>
          <AppBar color='secondary' position="relative">
            <Toolbar>
              <IconButton
                size="small"
                edge="start"
                color="default"
              >
              </IconButton>
              <Typography px={{ xs: 3, sm: 20 }} variant="h5" component="div" sx={{ flexGrow: 3 }}>
                Header
              </Typography>
              <Grid spacing={0.4} container justifyContent={'space-evenly'}>
                <Grid item>
                  <Button size='large' color="inherit"><Box borderBottom={1}>Main</Box></Button>
                </Grid>
                <Grid item>
                  <Button size='large' color="inherit"><Box borderBottom={1}>Skills</Box></Button>
                </Grid>
              </Grid>
              <Grid spacing={0.4} container justifyContent={'space-evenly'}>
                <Grid item>
                  <Button size='large' color="inherit"> <Box borderBottom={1}>Projects</Box> </Button>
                </Grid>
                <Grid item>
                  <Button size='large' color="inherit"><Box borderBottom={1}>Contacts</Box></Button>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Box>
        {/* MAIN */}
        <Container style={{ height: '100vh' }}>
          <Grid justifyContent='center' fontSize='20px' container direction='column' columns={3} spacing={8}>
            <Grid item>
              <Box>
                <Paper elevation={1} style={{ padding: '10px', margin: '20px 0' }}>
                  Lorem paper
                </Paper>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Paper elevation={1} style={{ padding: '10px', margin: '20px 0' }}>
                  Lorem paper
                </Paper>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Paper elevation={1} style={{ padding: '10px', margin: '20px 0' }}>
                  Lorem paper
                </Paper>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Paper elevation={1} style={{ padding: '10px', margin: '20px 0' }}>
                  Lorem paper
                </Paper>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Paper elevation={1} style={{ padding: '10px', margin: '20px 0' }}>
                  Lorem paper
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
        {/* FOOTER */}
        <Box>
          <AppBar color='secondary' position="relative">
            <Toolbar>
              <Box justifyContent={'center'} px={{ xs: 3, sm: 80 }} py={{ xs: 5, sm: 4 }}>
                <Button size='large' color="inherit">Lorem</Button>
                <Button size='large' color="inherit">Lorem</Button>
                <Button size='large' color="inherit">Lorem</Button>
                <Box fontSize={'14px'} justifyContent={'center'} pt={{ xs: 5, sm: 3 }} pb={{ xs: 5, sm: 0 }}>
                  Lorem ipsum dolor sit amet. &reg; {new Date().getFullYear()}
                </Box>
              </Box>

            </Toolbar>
          </AppBar>
        </Box>
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