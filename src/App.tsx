import React from 'react';
import './App.css';
import { AppBar, Avatar, Box, Button, Container, createTheme, Grid, IconButton, Link, Menu, Paper, ThemeProvider, Toolbar, Tooltip, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import s from './App.module.css'

function App() {
  const theme = createTheme(
    {
      palette: {
        primary: {
          main: '#0277bd',
        },
        secondary: blue,
      },
    }
  )

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box >
          <AppBar color='primary' position="relative">
            <Toolbar>
              <IconButton
                size="small"
                edge="start"
                color="default"
              // sx={{ mr: 5 }}
              >
              </IconButton>
              <Typography variant="h4" component="div" sx={{ flexGrow: 2 }}>
                Header
              </Typography>
              <Button size='large' color="inherit">Главная</Button>
              <Button size='large' color="inherit">Скиллы</Button>
              <Button size='large' color="inherit">Работы</Button>
              <Button size='large' color="inherit">Контакты</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Container>
          <Grid fontSize='20px' container direction='column' columns={1} spacing={8}>
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
      </ThemeProvider>
    </div >
  );
}

export default App;
