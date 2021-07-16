import { createContext } from "react";
import { ThemePalette } from "../../constants/theme.constants";

const PaletteContext = createContext<React.Dispatch<React.SetStateAction<ThemePalette | undefined>>>(() => { });

export default PaletteContext;