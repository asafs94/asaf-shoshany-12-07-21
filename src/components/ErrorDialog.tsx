import { makeStyles } from "@material-ui/core";
import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { FC } from "react";
import icons from "../assets/icons";

const useStyles = makeStyles(theme => {
  return {
    Icon: {
      color: theme.palette.error.main,
      width: '1.25em',
      height: '1.25em',
      marginRight: '0.5em',
      marginBottom: '-0.25em',
    }
  }
})


const ErrorDialog: FC<{ error: Error | null }> = ({ error }) => {
  const classes = useStyles();

  return (<Dialog open={!!error}>
    <DialogTitle>
      <icons.Error className={classes.Icon} />Service Unavailable</DialogTitle >
    <DialogContent>
      <DialogContentText>
        Unfortunately we cannot supply you with our services at the moment. Please try again later.
      </DialogContentText>
    </DialogContent>
  </Dialog>
  )
}


export default ErrorDialog;