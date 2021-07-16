import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => {
  return {
    Root: {
      display: 'flex',
      flexDirection: 'column',
    },
    Content: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    },
    Spinner: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(3),
      flex: 1
    },
    DynamicContent: {
      display: 'flex',
      flexDirection: 'column'
    },
    Actions: {
      flex: '0 0 auto',
    },
    Error: {
      padding: theme.spacing(),
      '&>svg': {
        width: '1em',
        height: '1em',
        color: theme.palette.error.main,
        marginRight: '0.5em'
      }
    }


  }
})


export default useStyles