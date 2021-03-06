import { css } from "@emotion/react";
import { createTheme } from "@mui/material";
import type {} from "@mui/lab/themeAugmentation";

export const GlobalStyles = css`
  * {
    font-family: "Inter", sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  #root {
    height: 100vh;
  }
  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;

declare module "@mui/material/styles" {
  interface Palette {
    complementaryYellow: Palette["primary"];
    complementaryBlue: Palette["primary"];
    complementaryWhite: Palette["primary"];
    complementaryBlack: Palette["primary"];
  }
  interface PaletteOptions {
    complementaryYellow: PaletteOptions["primary"];
    complementaryBlue: PaletteOptions["primary"];
    complementaryWhite: PaletteOptions["primary"];
    complementaryBlack: PaletteOptions["primary"];
  }
  interface PaletteColor {
    lightExtra?: string;
  }
  interface SimplePaletteColorOptions {
    lightExtra?: string;
  }

  interface TypographyVariants {
    bold: React.CSSProperties;
    subtitle3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    bold?: React.CSSProperties;
    subtitle3?: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bold: true;
    subtitle3: true;
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    complementaryYellow: true;
    complementaryBlue: true;
    complementaryWhite: true;
    complementaryBlack: true;
  }

  interface ButtonPropsVariantOverrides {
    borderPrimary: true;
    borderSecondary: true;
    borderBlue: true;
    borderGoogle: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      dark: "#1B314B",
      main: "#253F58",
      light: "#577D9A",
      lightExtra: "#85B1CC",
    },
    secondary: {
      dark: "#B25F17",
      main: "#D07A20",
      light: "#E2A352",
      lightExtra: "#F0c176",
    },
    complementaryYellow: {
      dark: "#BC8722",
      main: "#DBA52F",
      light: "#E9C25F",
      lightExtra: "#F4D781",
    },
    complementaryBlue: {
      dark: "#477799",
      main: "#6296B3",
      light: "#8ABCD1",
      lightExtra: "#A9D9E8",
    },
    complementaryWhite: {
      dark: "#DAD4C8",
      main: "#F2F2F2",
      light: "#F7F7F7",
      lightExtra: "#FBF9F3",
    },
    complementaryBlack: {
      dark: "#4A3D3E",
      main: "#575454",
      light: "#9A9696",
      lightExtra: "#CCC9C8",
    },
    text: {
      secondary: "#868080",
    },
  },
  typography: {
    fontFamily: ["Inter"].join(","),
    h1: {
      fontSize: 34,
      fontWeight: 700,
      letterSpacing: "0.09em",
    },
    h2: {
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: "0.09em",
    },
    h3: {
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: "0.46px",
    },
    h4: {
      fontSize: 20,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 20,
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 400,
    },
    // TODO: define a better name for this
    subtitle3: {
      fontSize: 18,
      fontWeight: 700,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: "0.46px",
    },
    bold: {
      fontWeight: 600,
    },
  },
});

export const Theme = createTheme(theme, {
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          fontSize: "16px",
          fontWeight: "600",
          textTransform: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            borderRadius: "10px",
            height: "45px",
          },
        },
        {
          props: { variant: "borderPrimary" },
          style: {
            borderRadius: "50px",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.getContrastText(theme.palette.primary.main),
          },
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        },
        {
          props: { variant: "borderSecondary" },
          style: {
            height: "45px",
            borderRadius: "20px",
            paddingInline: "36px",
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.getContrastText(theme.palette.secondary.main),
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark,
            },
          },
        },
        {
          props: { variant: "borderBlue" },
          style: {
            height: "45px",
            borderRadius: "20px",
            paddingInline: "36px",
            backgroundColor: theme.palette.complementaryBlue.main,
            color: theme.palette.getContrastText(
              theme.palette.complementaryBlue.main
            ),
            "&:hover": {
              backgroundColor: theme.palette.complementaryBlue.dark,
            },
          },
        },
        {
          props: { variant: "borderGoogle" },
          style: {
            height: "45px",
            borderRadius: "20px",
            paddingInline: "36px",
            backgroundColor: theme.palette.complementaryWhite.main,
            color: theme.palette.getContrastText(
              theme.palette.complementaryWhite.main
            ),
            "&:hover": {
              backgroundColor: theme.palette.complementaryWhite.dark,
            },
          },
        },
      ],
    },
  },
});
