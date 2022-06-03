import "@emotion/react";

import { Theme } from "./assets/styles/Global";

declare type CustomTheme = typeof Theme;

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
