import { colorTokens } from './color';

export const lightTheme = {
  colors: {
    ...colorTokens,
    typography: colorTokens.primary,
    background: colorTokens.primary,
  },
} as const;

export const darkTheme = {
  colors: {
    ...colorTokens,
    typography: colorTokens.primary,
    background: colorTokens.primary,
  },
} as const;
