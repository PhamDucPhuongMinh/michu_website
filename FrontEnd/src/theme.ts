import { red, green, yellow, blue } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: red,
    secondary: green,
    text: {
      primary: yellow[500],
      secondary: blue[500]
    }
  }
})

export default theme
