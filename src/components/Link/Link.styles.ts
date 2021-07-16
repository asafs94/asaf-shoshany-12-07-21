import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => {
  return {
    Root: {
      color: 'inherit',
      textDecoration: 'none'
    },
    Active: {
      boxShadow: `0 0.25rem 0 ${theme.palette.primary.main}`
    }
  }
})


export default useStyles;