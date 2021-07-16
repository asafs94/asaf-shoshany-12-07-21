
import { FormControlLabel, List, ListItem, Switch, Typography, useMediaQuery } from "@material-ui/core";
import { ToggleButton } from "@material-ui/lab";
import { FC, PropsWithChildren, useContext, useEffect } from "react";
import ErrorDialog from "../../components/ErrorDialog";
import Link from "../../components/Link";
import { UnitType } from "../../constants/preferences.constants";
import UserPreferencesContext from "../../contexts/user-preferences/user-preferences.context";
import { isTouchEnabled } from "../../utils";
import Drawer from "../Drawer";
import Header from "../Header";
import useStyles from "./Layout.styles";


type Props = PropsWithChildren<{ error: Error | null }>;
const Navs = <List>
  <ListItem><Link to="/">Home</Link></ListItem>
  <ListItem><Link to="/favorites">Favorites</Link></ListItem>
</List>



const MaxWidthToShowNavs = 480;

const getNavigationType = (narrowScreen: boolean, hasTouch: boolean) => {
  if (!narrowScreen) return "Header";
  if (hasTouch) return "Drawer";
  return "Footer"
}


const Layout: FC<Props> = ({ children, error }) => {
  const classes = useStyles();
  const narrowScreen = useMediaQuery(`screen and (max-width: ${MaxWidthToShowNavs}px)`); // for touch screens
  const isTouch = isTouchEnabled();
  const { preferences, actions } = useContext(UserPreferencesContext)
  const navigationType = getNavigationType(narrowScreen, isTouch)

  const onSwitchChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    actions.setUnits(checked ? UnitType.Imperial : UnitType.Metric)
  }

  return (
    <div className={classes.Root}>
      <Header showNav={navigationType === "Header"} />
      <FormControlLabel
        className={classes.UnitSwitch}
        control={<Switch color="default" size="small" checked={preferences.units === UnitType.Imperial} onChange={onSwitchChange} />}
        label={<Typography variant="caption" htmlFor="unit-switch" component="label">{preferences.units}</Typography>}
      />
      <main className={classes.Main}>
        {children}
      </main>
      <ErrorDialog error={error} />
      {navigationType === "Drawer" &&
        <Drawer>
          {Navs}
        </Drawer>}
      {navigationType === "Footer" && <div>
        {Navs}
      </div>}
    </div>
  )
}


export default Layout;