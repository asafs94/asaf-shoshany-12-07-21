import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles<Theme, { x: number, transition: boolean, drawerWidth: number }>(theme => {
  return {
    Drawer: {
      position: 'absolute',
      right: 0,
      width: ({ drawerWidth }) => drawerWidth,
      height: '100%',
      top: 0,
      borderRadius: 0,
      transform: ({ x }) => `translateX(${x}px)`,
      transition: ({ transition }) => transition ? `transform 150ms ease-in-out` : '',
    },
    Handle: {
      position: 'absolute',
      right: '100%',
      width: '1.5rem',
      height: '3rem',
      top: '14rem',
      background: theme.palette.background.paper,
      borderTopLeftRadius: theme.shape.borderRadius,
      borderBottomLeftRadius: theme.shape.borderRadius,
      display: 'grid',
      gap: '0.1em',
      padding: '0.1em',
      alignItems: 'center',
      justifyItems: 'center',
      boxShadow: '-3px 0 4px hsl(0deg 0% 50%)',
      '&>*': {
        borderRadius: '100%',
        width: '0.5em',
        height: '0.5em',
        background: theme.palette.primary.main
      }
    },
    Backdrop: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'absolute',
      background: 'hsla(0,0%,50%,0.5)',
    },
  }
})


export default useStyles;