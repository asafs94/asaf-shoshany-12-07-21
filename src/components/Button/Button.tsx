import { ButtonProps, IconButton, Button as MuiButton, Tooltip } from '@material-ui/core'
import React, { FC } from 'react'

type Props = ButtonProps & { iconButton?: boolean }

export const Button: FC<Props> = ({ iconButton, children, startIcon, size, href, ...props }) => {
  if (iconButton) return <Tooltip title={typeof children === "string" ? children : ''}>
    <IconButton {...props}>
      {startIcon}
    </IconButton>
  </Tooltip>
  return (
    <MuiButton startIcon={startIcon} {...props}>
      {children}
    </MuiButton>
  )
}
