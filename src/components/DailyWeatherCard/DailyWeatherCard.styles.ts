import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => {
  return {
    Root: {
    },
    Content: {
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    TimeOfDay: {
      display: 'flex',
      flexDirection: 'column',
      '&>*': {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      }
    }
  }
})


export default useStyles