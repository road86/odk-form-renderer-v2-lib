import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EF6B73',
      dark: '#649a6a',
    },
    secondary: {
      main: '#D2AB16',
      light: '#EBFDED',
      dark: '#AD8C0F',
    },
    // error: {
    //   main: '#f44336',
    // },
    // warning: {
    //   main: '#ff9800',
    // },
    //table stripe
    info: {
      dark: '#F5F4F4',
      main: '#EBFDED',
      light: '#F9F9F9',
    },
    // success: {
    //   main: '#4caf50',
    // },
    text: {
      primary: '#EBFDED',
      secondary: '#000000',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    // divider: 'rgba(0, 0, 0, 0.12)',
    // background: {
    //   paper: '#fff',
    //   default: '#fff',
    // },
    // action: {
    //   active: '#EEEEEE',
    //   hover: '#888888',
    //   hoverOpacity: 0.04,
    //   selected: '#FFFFFF',
    //   disabled: '#666666',
    // },
  },
  typography: {
    h1: {
      fontWeight: 700,
      // lineHeight: 0.35,
      fontSize: 30,
      // color: '#FFFFFF',
    },
    h2: {
      fontWeight: 500,
      fontSize: 20,
      // lineHeight: 0.23,
    },
    h3: {
      fontWeight: 400,
      fontSize: 18,
      // lineHeight: 0.21,
      // color: '#FFFFFF',
    },
    h4: {
      fontWeight: 700,
      // lineHeight: 0.35,
      fontSize: 26,
    },
    body1: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      // lineHeight: 1.18,
      fontSize: 16,
    },
    caption: {
      fontFamily: 'Roboto',
      fontWeight: 600,
      // lineHeight: 0.18,
      fontSize: 16,
    },
    subtitle1: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      // lineHeight: 0.18,
      fontSize: 16,
    },
    subtitle2: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      // lineHeight: 0.18,
      fontSize: 16,
    },
  },
  //menu
  overrides: {
    MuiPaper: {
      root: {
        color: '#222222 !important',
      },
    },
  },
});
