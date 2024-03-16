import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import DarkModeButton from './components/ModeSelect'

function App() {
  return (
    <>
      <DarkModeButton />
      <Typography color="text.primary">Primary</Typography>
      <Typography color="text.secondary">Secondary</Typography>
      <Button variant="contained" color="primary">
        Click me!
      </Button>
      <Button variant="contained" color="secondary">
        Click me!
      </Button>
    </>
  )
}

export default App
