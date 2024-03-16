import WelcomeImage from '@/assets/welcome.png'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import PersonIcon from '@mui/icons-material/Person'
import { useState } from 'react'
import AuthFormContainer from '@/components/AuthFormContainer'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@/components/Link'
import { SubmitHandler, useForm } from 'react-hook-form'
import FormHelperText from '@mui/material/FormHelperText'

type LoginFormType = {
  username: string
  password: string
}

function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormType>()

  const onSubmit: SubmitHandler<LoginFormType> = (data) => console.log(data)

  return (
    <AuthFormContainer>
      <Box sx={{ mb: 3 }}>
        <img src={WelcomeImage} alt="" width={'100%'} />
      </Box>
      <Typography variant="h5" fontWeight={700} align="center" sx={{ mb: 3 }}>
        Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register('username', { required: 'Please enter username!' })}
            error={errors.username ? true : false}
          />
          {errors.username && (
            <FormHelperText error id="accountId-error">
              {errors.username.message}
            </FormHelperText>
          )}
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
                  {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </IconButton>
              </InputAdornment>
            }
            {...register('password', { required: 'Please enter password!' })}
            error={errors.password ? true : false}
          />
          {errors.password && (
            <FormHelperText error id="accountId-error">
              {errors.password.message}
            </FormHelperText>
          )}
        </FormControl>
        <Box sx={{ mb: 2, textAlign: 'right' }}>
          <Link href="/forgot-password" variant="subtitle2" sx={{ textDecoration: 'none', color: 'primary.main' }}>
            Forgot Password?
          </Link>
        </Box>
        <FormControl size="small" fullWidth sx={{ mb: 2 }}>
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </FormControl>
      </form>
      <Typography variant="body2" align="center">
        Don't have an account?&nbsp;
        <Link href="/signup" sx={{ color: 'primary.main', fontWeight: 500, textDecoration: 'none' }}>
          Sign Up.
        </Link>
      </Typography>
    </AuthFormContainer>
  )
}

export default LoginPage
