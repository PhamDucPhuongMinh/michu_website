import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const AUTH_FORM_MAX_WIDTH = '350px'

declare module '@mui/material/styles' {
  interface Theme {
    app: {
      authFormMaxWidth: string
    }
  }
  interface ThemeOptions {
    app?: {
      authFormMaxWidth: string
    }
  }
}
// A custom theme for this app
const theme = extendTheme({
  app: {
    authFormMaxWidth: AUTH_FORM_MAX_WIDTH
  }
})

export default theme
