import { createTheme, responsiveFontSizes } from "@material-ui/core";


let theme = createTheme({
  spacing: factor => `${0.5 * factor}rem`,
  typography: {
    fontFamily: 'Poppins',
    h5: {

    },
    body1: {

    },
    body2: {

    }
  }
})

theme = responsiveFontSizes(theme);

export default theme;