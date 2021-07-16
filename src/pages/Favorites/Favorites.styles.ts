import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    Root: {
      width: 'fit-content',
      margin: 0,
      padding: theme.spacing(1),
      display: 'flex',
      height: 'fit-content',
      flexWrap: 'wrap',
      justifyContent: 'center',
      '&>*': {
        flex: '1 0 11rem',
        margin: theme.spacing(),
      },
    },
    CardList: {

    }
  }
})


export default useStyles