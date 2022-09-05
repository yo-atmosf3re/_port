import * as React from 'react';
import { Box } from '@mui/material';

const spanStyles = { borderBottom: '1px solid' }

function MyWorksTitle() {
   return (<div >
      <Box style={{ textAlign: 'center' }}>
         <span style={spanStyles}>My works</span>
      </Box>
   </div >);
}

export default MyWorksTitle;