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
  interface ButtonPropsVariantOverrides {
    borderPrimary: true;
    borderSecondary: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      light: "#577D9A",
      main: "#253F58",
      dark: "#1B314B",
    },
    secondary: {
      light: "#E2A352",
      main: "#D07A20",
      dark: "#B25F17",
    },
    complementaryYellow: {
      light: "#577D9A",
      main: "#253F58",
      dark: "#1B314B",
    },
    complementaryBlue: {
      light: "#577D9A",
      main: "#253F58",
      dark: "#1B314B",
    },
    complementaryWhite: {
      lightExtra: "#FBF9F3",
      light: "#577D9A",
      main: "#ffffff",
      dark: "#1B314B",
    },
    complementaryBlack: {
      light: "#577D9A",
      main: "#253F58",
      dark: "#1B314B",
    },
    text: {
      secondary: "#868080",
    },
  },
  typography: {
    fontFamily: ["Inter"].join(","),
    h1: {
      fontSize: 34,
    },
    h2: {
      fontSize: 32,
    },
    h3: {
      fontSize: 24,
      fontWeight: 600,
    },
    h4: {
      fontSize: 20,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 20,
    },
    subtitle2: {
      fontSize: 19,
      fontWeight: 400,
    },
    // TODO: define a better name for this
    subtitle3: {
      fontSize: 18,
      fontWeight: 700,
    },
    body1: {
      fontSize: 14,
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
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "borderPrimary" },
          style: {
            borderRadius: 50,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.getContrastText(theme.palette.primary.main),
          },
        },
        {
          props: { variant: "borderSecondary" },
          style: {
            borderRadius: 50,
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.getContrastText(theme.palette.secondary.main),
          },
        },
      ],
    },
  },
});
