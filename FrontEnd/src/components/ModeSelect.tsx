import { useColorScheme } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (e: SelectChangeEvent) => {
    const mode = e.target.value as 'light' | 'dark' | 'system'
    setMode(mode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Mode</InputLabel>
      <Select labelId="demo-select-small-label" id="demo-select-small" value={mode} label="Mode" onChange={handleChange}>
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect
