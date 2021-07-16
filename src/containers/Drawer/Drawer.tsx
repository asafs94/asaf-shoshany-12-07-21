import { Fade, Paper } from "@material-ui/core"
import { PropsWithChildren } from "react"
import { useRef } from "react"
import { useState } from "react"
import { FC } from "react"
import useStyles from './Drawer.styles'

type Props = PropsWithChildren<{}>

const drawerWidth = 240;

const Drawer: FC<Props> = ({ children }) => {
  const [x, setX] = useState(drawerWidth);

  const [dragging, setDragging] = useState(false)
  const mouseStartRef = useRef(0);


  const onDragStart = (event: React.TouchEvent) => {
    const touch = event.changedTouches.item(0);
    setDragging(true);
    mouseStartRef.current = touch.clientX;
  }

  const onDrag = (event: React.TouchEvent) => {
    const touch = event.changedTouches.item(0);
    if (!dragging) return;
    const translationValue = mouseStartRef.current - touch.clientX //To the left.
    mouseStartRef.current = touch.clientX;
    const maxX = drawerWidth;
    const minX = 0
    setX(x => {
      const translated = x - translationValue;
      return translated > maxX ? maxX : translated <= minX ? minX : translated
    });
  }

  const onDragEnd = (event: React.TouchEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(false)
    setX(x => {
      if (x >= drawerWidth / 2) return drawerWidth;
      else return 0;
    })
  }

  const classes = useStyles({ drawerWidth, x, transition: !dragging });

  return (
    <div>
      <Fade in={x === 0} mountOnEnter unmountOnExit>
        <div onClick={() => setX(drawerWidth)} className={classes.Backdrop} />
      </Fade>
      <Paper style={{}} className={classes.Drawer} >
        <div
          onTouchEnd={onDragEnd}
          onTouchMove={onDrag}
          onTouchStart={onDragStart}
          className={classes.Handle}
        >
          <div />
          <div />
          <div />
        </div>
        {children}
      </Paper>
    </div>
  )
}


export default Drawer;
