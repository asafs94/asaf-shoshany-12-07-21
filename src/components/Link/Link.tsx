
import classNames from 'classnames'
import { FC } from 'react'
import { NavLink as AppLink, NavLinkProps } from 'react-router-dom'
import useStyles from './Link.styles'




const Link: FC<NavLinkProps> = ({ className, children, activeClassName, ...props }) => {
  const classes = useStyles();
  return (
    <AppLink exact activeClassName={classNames(classes.Active, activeClassName)} className={classNames(classes.Root, className)} {...props}>
      {children}
    </AppLink>
  )
}

export default Link
