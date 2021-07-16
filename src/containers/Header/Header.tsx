import classNames from "classnames";
import { FC } from "react";
import { useHistory } from "react-router-dom";
import Icons from "../../assets/icons";
import Link from "../../components/Link";
import SearchInput from "../SearchInput/SearchInput";
import useStyles from "./Header.styles";


type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { showNav: boolean };


const Header: FC<Props> = ({ className, showNav, ...props }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <header className={classNames(classes.Root, className)} {...props}>
      <Icons.Logo onClick={() => history.push('/')} className={classes.Logo} />
      {showNav && <nav className={classes.Nav}>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>}
      <SearchInput className={classes.SearchInput} />
    </header >
  )
}


export default Header;