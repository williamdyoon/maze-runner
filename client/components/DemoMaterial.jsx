import React from 'react';
import { Button } from '@material-ui/core';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';
// import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: purple[300],
//       main: purple[500],
//       dark: purple[700],
//     },
//     secondary: {
//       light: green[300],
//       main: green[500],
//       dark: green[700],
//     },
//   },
// });

const DemoMaterial = () => {
  return (
    <div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
};

export default DemoMaterial;

// // <MuiThemeProvider theme={theme}>
//   // <CssBaseline />
//   {/* Reboot kickstart an elegant, consistent, and simple baseline to build upon. */}
