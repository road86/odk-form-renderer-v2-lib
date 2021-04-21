import { createStyles, Theme } from '@material-ui/core';

const GroupStyle = (theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.common.white,
      '&.MuiAccordionSummary-root': {
        borderTop: `5px solid ${theme.palette.primary.dark}`,
        color: theme.palette.primary.dark,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.common.white,
        },
        '&.Mui-expanded': {
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.common.white,
        },
      },
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      '& button': {
        color: '#FFF',
      },
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
      background: theme.palette.primary.dark,
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    listItem: {
      width: '94%',
      background: theme.palette.primary.main,
      color: '#FFF',
      marginTop: '2px',
      marginLeft: '8px',
      marginRight: '2px',
      borderRadius: '3px',
      '&:hover': {
        background: theme.palette.primary.light,
      },
    },
    listItemIcon: {
      color: '#FFF',
    },
    listItemActive: {
      width: '94%',
      background: theme.palette.primary.light,
      color: '#FFF',
      marginTop: '2px',
      marginLeft: '8px',
      marginRight: '2px',
      borderRadius: '3px',
      '&:hover': {
        background: theme.palette.primary.light,
      },
    },
    nested: {
      paddingLeft: theme.spacing(4),
      color: '#FFF',
    },
    navlogo: {
      width: '40%',
      margin: '0 auto',
      padding: 3,
      backgroundColor: '#FFF',
      borderRadius: 5,
    },
    listParent: {
      color: theme.palette.common.white,
      '&.MuiListItem-root': {
        color: theme.palette.common.white,
        '&.Mui-selected': { color: theme.palette.common.white, backgroundColor: theme.palette.primary.main },
        '&:hover': {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.primary.dark,
        },
      },
    },
    drawerClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp,
      }),
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(7) + 1,
      },
      background: theme.palette.primary.dark,
    },
    drawerOpen: {
      '&:hover': {
        overflowY: 'auto',
      },
      overflowY: 'hidden',
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.sharp,
      }),
    },
  });

export default GroupStyle;
