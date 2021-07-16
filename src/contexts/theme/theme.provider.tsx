
import { FC, PropsWithChildren, useMemo, useState } from 'react'
import { ThemePalette } from '../../constants/theme.constants';
import defaultTheme, { palettes } from '../../theme';
import PaletteContext from './palette.context';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core'


type Props = PropsWithChildren<{}>


const themeByPalette = (paletteType: ThemePalette | undefined) => {
  if (!paletteType) return defaultTheme;
  const palette = palettes[paletteType];
  return { ...defaultTheme, palette }
}


const ThemeProvider: FC<Props> = ({ children }) => {

  const [palette, setPalette] = useState<ThemePalette | undefined>();
  const theme = useMemo(() => themeByPalette(palette), [palette])

  return (
    <PaletteContext.Provider value={setPalette} >
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </PaletteContext.Provider>
  )
}

export default ThemeProvider




