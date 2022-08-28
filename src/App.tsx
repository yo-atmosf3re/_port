import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Box, Container, createTheme, Grid, IconButton, ThemeProvider, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/material';
import { cyan } from '@mui/material/colors';


function App() {
  const theme = createTheme({
    palette: {
      primary: cyan,
      secondary: {
        main: '#80deea',
      },
    },
  })
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 2 }}>
          <AppBar color='primary' position="relative">
            <Toolbar>
              <IconButton
                size="medium"
                edge="start"
                color="default"
                sx={{ mr: 5 }}
              >
              </IconButton>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Lorem
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Container>

        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
