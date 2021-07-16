import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles((theme) => {
  return {
    Root: {
      width: '100%',
      height: '100%',
      background: theme.palette.background.default,
      color: theme.palette.common.white,
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(2),
      overflowX: 'hidden',
      position: 'relative'
    },
    Header: {
      height: '2.5rem'
    },
    Main: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto',
      flex: 1,
    },
    UnitSwitch: {
      display: 'flex',
      textTransform: 'capitalize',
      alignItems: 'center',
      marginLeft: '0.5rem'
    },
  }
})


export default useStyles;