import { createTheme, responsiveFontSizes } from "@mui/material";
import merge from "lodash/merge";
import components from "./components";
import themesOptions from "./themeOptions";
import { shadows } from "./shadow";
import { THEMES } from "../constsnts";
const baseOptions = {
  direction: "ltr",
  typography: {
    fontFamily: "'Montserrat', sans-serif"
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
};
export const createCustomTheme = settings => {
  /**
   * settings.theme value is 'light' or 'dark'
   * update settings in contexts/settingsContext.tsx
   */
  let themeOptions = themesOptions[settings.theme];

  if (!themeOptions) {
    themeOptions = themesOptions[THEMES.LIGHT];
  }

  const mergedThemeOptions = merge({}, baseOptions, themeOptions, {
    direction: settings.direction
  });
  let theme = createTheme(mergedThemeOptions); // set shadows

  theme.shadows = shadows(theme); // set components

  theme.components = components(theme);

  if (settings.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};