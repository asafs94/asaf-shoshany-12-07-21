
import { List, ListItem, useMediaQuery } from "@material-ui/core";
import { FC, PropsWithChildren, useEffect } from "react";
import ErrorDialog from "../../components/ErrorDialog";
import Link from "../../components/Link";
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

  const navigationType = getNavigationType(narrowScreen, isTouch)

  return (
    <div className={classes.Root}>
      <Header showNav={navigationType === "Header"} />
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