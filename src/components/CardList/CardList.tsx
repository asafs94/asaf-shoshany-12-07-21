import classNames from "classnames";
import { FC, HTMLAttributes } from "react";
import useStyles from "./CardList.styles";


type Props = HTMLAttributes<HTMLDivElement>


const CardList: FC<Props> = ({ className, children, ...props }) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.Root, className)} {...props}>
      {children}
    </div>
  )
}


export default CardList;