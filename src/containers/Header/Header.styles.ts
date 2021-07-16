import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => {
  return {
    Root: {
      display: 'grid',
      alignItems: 'center',
      gridAutoFlow: 'column',
      gridTemplateColumns: 'auto 1fr auto auto',
      gridTemplateAreas: '"logo . nav search"',
      padding: theme.spacing(),
      userSelect: 'none',
      cursor: 'pointer'
    },
    Logo: {
      width: 'clamp(5.5rem, 25vw, 8.125rem)',
      height: 'auto',
      gridArea: 'logo'
    },
    Nav: {
      gridArea: 'nav',
      display: 'grid',
      gridAutoFlow: 'column',
      gap: '1em',
      fontSize: 'clamp(0.75rem, 3vw, 1rem)',
      marginRight: '3rem'
    },
    SearchInput: {
      // width: 'clamp(0.9rem, 3.75vw, 1.2rem)',
      // height: 'auto',
      gridArea: 'search'
    }
  }
})


export default useStyles