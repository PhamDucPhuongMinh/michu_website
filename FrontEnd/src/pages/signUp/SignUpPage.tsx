import WelcomeImage from '@/assets/welcome.png'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import PersonIcon from '@mui/icons-material/Person'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import { useState } from 'react'
import AuthFormContainer from '@/components/AuthFormContainer'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@/components/Link'

function SignUpPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <AuthFormContainer>
      <Box sx={{ mb: 3 }}>
        <img src={WelcomeImage} alt="" width={'100%'} />
      </Box>
      <Typography variant="h5" fontWeight={700} align="center" sx={{ mb: 3 }}>
        Sign Up
      </Typography>
      <FormControl size="small" fullWidth sx={{ mb: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Username
        </Typography>
        <OutlinedInput
          placeholder="Enter Username"
          sx={{ borderRadius: 5 }}
          id="outlined-adornment-username"
          endAdornment={
            <InputAdornment position="end">
              <PersonIcon fontSize="small" />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl size="small" fullWidth sx={{ mb: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Email
        </Typography>
        <OutlinedInput
          placeholder="Enter Email"
          sx={{ borderRadius: 5 }}
          id="outlined-adornment-email"
          endAdornment={
            <InputAdornment position="end">
              <AlternateEmailIcon fontSize="small" />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl size="small" fullWidth sx={{ mb: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Password
        </Typography>
        <OutlinedInput
          placeholder="Enter Password"
          sx={{ borderRadius: 5 }}
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword((prev) => !prev)} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl size="small" fullWidth sx={{ mb: 2 }}>
        <Button variant="contained" color="primary">
          Sign Up
        </Button>
      </FormControl>
      <Typography variant="body2" align="center">
        Already have an account?&nbsp;
        <Link href="/login" sx={{ color: 'primary.main', fontWeight: 500, textDecoration: 'none' }}>
          Login.
        </Link>
      </Typography>
    </AuthFormContainer>
  )
}

export default SignUpPage
