import { makeStyles, Theme } from "@material-ui/core";


const useStyles = makeStyles<Theme, { inputOpen: boolean }>((theme) => {
  return {
    Root: {
      display: 'flex',
      width: ({ inputOpen }) => inputOpen ? '10rem' : '2.5rem',
      borderRadius: ({ inputOpen }) => inputOpen ? theme.shape.borderRadius : '100%',
      transition: 'all 300ms ease-in-out',
      position: 'relative',
    },
    IconButton: {
      flex: '0 0 auto'
    },
    AutoCompleteRoot: {
      position: 'absolute',
      top: `calc(100% + ${theme.spacing()})`,
      left: 0,
      right: 0,
    },
    Spinner: {
      display: 'flex',
      width: '100%',
      padding: theme.spacing(2),
      alignItems: 'center',
      justifyContent: 'center'
    }

  }
})


export default useStyles