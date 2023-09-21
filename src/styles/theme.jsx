import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { primaryColor, secondaryColor, themeType } from "./variable";
// import tinycolor from 'tinycolor2';

// const generatePaletteFromBase = (base) => {
//     const baseLight = tinycolor('#ffffff');
//     const baseDark = multiply(tinycolor(base).toRgb(), tinycolor(base).toRgb());
//     const baseTriad = tinycolor(base).tetrad();

//     return {
//       50: tinycolor(tinycolor.mix(baseLight, base, 12), '50').toHexString(),
//       100: tinycolor(tinycolor.mix(baseLight, base, 30), '100').toHexString(),
//       200: tinycolor(tinycolor.mix(baseLight, base, 50), '200').toHexString(),
//       300: tinycolor(tinycolor.mix(baseLight, base, 70), '300').toHexString(),
//       400: tinycolor(tinycolor.mix(baseLight, base, 85), '400').toHexString(),
//       500: tinycolor(tinycolor.mix(baseLight, base, 100), '500').toHexString(),
//       600: tinycolor(tinycolor.mix(baseDark, base, 87), '600').toHexString(),
//       700: tinycolor(tinycolor.mix(baseDark, base, 70)).toHexString(),
//       800: tinycolor(tinycolor.mix(baseDark, base, 54), '800').toHexString(),
//       900: tinycolor(tinycolor.mix(baseDark, base, 25), '900').toHexString(),
//       A100: tinycolor(tinycolor.mix(baseDark, baseTriad[4], 15).saturate(80).lighten(65), 'A100').toHexString(),
//       A200: tinycolor(tinycolor.mix(baseDark, baseTriad[4], 15).saturate(80).lighten(55), 'A200').toHexString(),
//       A400: tinycolor(tinycolor.mix(baseDark, baseTriad[4], 15).saturate(100).lighten(45), 'A400').toHexString(),
//       A700: tinycolor(tinycolor.mix(baseDark, baseTriad[4], 15).saturate(100).lighten(40), 'A700').toHexString(),
//       light: tinycolor(tinycolor.mix(baseLight, base, 70), '300').toHexString(),
//       dark: tinycolor(tinycolor.mix(baseDark, base, 70), '700').toHexString(),
//       main: base,
//     };
//   };

export default function createTheme(setting) {
  const breakpoints = createBreakpoints({})
  return createMuiTheme({
    palette: {
      primary: { main: setting.primaryColor || primaryColor }, // Purple and green play nicely together.
      secondary: { main: setting.secondaryColor || secondaryColor }, // This is just green.A700 as hex.
      type: setting.themeType || themeType
    },
    mixins: {
      toolbar: {
        minHeight: 50
      }
    },
    overrides: {
      MuiTypography: {
        h4: {
          fontSize: "1.9rem",
          lineHeight:'1.0',
          [breakpoints.down("md")]: {
            fontSize: "1.5rem"
          }
        }
      }
    }
  });
}
