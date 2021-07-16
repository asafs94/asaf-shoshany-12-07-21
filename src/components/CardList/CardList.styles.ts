import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => {
  return {
    Root: {
      display: 'grid',
      gridAutoFlow: 'column',
      gap: theme.spacing(),
      maxWidth: 'fit-content',
    },

  }
})


export default useStyles