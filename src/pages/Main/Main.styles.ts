import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    Root: {
      overflow: 'auto',
      minHeight: '20rem',
      maxHeight: '50%',
      width: 'fit-content',
      minWidth: '70%',
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      margin: 'auto',
      marginBottom: 0,
    },
    GeneralInfo: {
      marginBottom: theme.spacing(2),
      display: 'grid',
      gridTemplateRows: 'repeat(3, auto)',
      gridTemplateColumns: '1fr auto',
      whiteSpace: 'nowrap',
      gridTemplateAreas:
        ` 'name .'
          'region .'
          'temp favorites'
        `
    },
    Name: {
      gridArea: 'name'
    },
    Region: {
      gridArea: 'region'
    },
    Temperature: {
      gridArea: 'temp'
    },
    AddToFavorites: {
      color: 'inherit',
      gridArea: 'favorites',
      '& svg': {
        height: '1rem',
        width: 'auto',
      },
    },
    DailyForecast: {
      maxWidth: '100%',
      overflow: 'auto',
      flex: 1,
    },
    Spinner: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    }
  }
})


export default useStyles