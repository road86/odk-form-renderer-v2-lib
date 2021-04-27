import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#649A6A',
      dark: '#8ac390',
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
    MuiListItem: {
      root: {
        paddingTop: 12,
        paddingBottom: 12,
        color: '#666666',
        '&:hover': {
          // backgroundColor: '#EBFDED',
          textDecoration: 'none',
        },
        '&:selected': {
          color: '#222222',
          textDecoration: 'none',
        },
      },
    },
    MuiInputLabel: {
      outlined: {
        color: '#222222',
      },
    },
    MuiInputBase: {
      root: {
        color: '#222222',
      },
    },
    MuiStepIcon: {
      active: {
        color: '#649A6A',
      },
      // completed: {
      //   color: '#8ac390 !important',
      // },
      // active: {
      //
      // }
    },
    MuiStepLabel: {
      label: {
        color: '#649A6A',
      },
    },
    MuiStepConnector: {
      line: {
        color: '#EBFDED',
      },
    },
    MuiTypography: {
      root: {
        fontStyle: 'normal',
      },
    },
    MuiTextField: {
      root: {
        backgroundColor: '#EBFDED',
        borderRadius: 5,
      },
    },
    // MuiTableCell: {
    //   root: {
    //     fontSize: 16,
    //     lineHeight: 0.21,
    //     fontWeight: 400,
    //     whiteSpace: 'nowrap',
    //   },
    // },
    // MuiSelect: {
    //   icon: {
    //     fill: '#666666',
    //   },
    // },
    // MuiFormLabel: {
    //   root: {
    //     color: '#666666',
    //   },
    // },
    MuiButton: {
      root: {
        height: 40,
      },
      label: {
        fontWeight: 400,
        // fontSize: 16,
        // lineHeight: 0.18,
        // color: '#EBFDED',
        fontFamily: 'Roboto',
      },
      containedPrimary: {
        color: '#FFFFFF',
      },
    },
    MuiRadio: {
      root: {
        color: '#EBFDED',
      },
    },
    MuiSelect: {
      select: {
        color: '#222222',
      },
    },
    // MuiTabs: {
    //   flexContainer: {
    //     justifyContent: 'flex-end',
    //   },
    //   indicator: {
    //     backgroundColor: '#FFFFFF',
    //   },
    // },
    // MuiTab: {
    //   textColorPrimary: {
    //     color: '#777171',
    //     backgroundColor: '#EFEFEF',
    //     margin: 10,
    //     border: 'none',
    //     '&$selected': { color: '#FFFFFF', backgroundColor: '#44B4DB' },
    //   },
    // },
    // MuiTableFooter: {
    //   root: {
    //     justifyContent: 'flex-end',
    //   },
    // },
    // MuiIconButton: {
    //   root: {
    //     color: '#888888',
    //   },
    // },
    // MuiPopover: {
    //   paper: {
    //     minWidth: '50%',
    //   },
    // },
  },
});
