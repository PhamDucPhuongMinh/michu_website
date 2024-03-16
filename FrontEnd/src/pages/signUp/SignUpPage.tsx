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
import { SubmitHandler, useForm } from 'react-hook-form'
import FormHelperText from '@mui/material/FormHelperText'
import { regex } from '@/utils'

type SignUpFormType = {
  username: string
  email: string
  password: string
}

function SignUpPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpFormType>()

  const onSubmit: SubmitHandler<SignUpFormType> = (data) => console.log(data)

  return (
    <AuthFormContainer>
      <Box sx={{ mb: 3 }}>
        <img src={WelcomeImage} alt="" width={'100%'} />
      </Box>
      <Typography variant="h5" fontWeight={700} align="center" sx={{ mb: 3 }}>
        Sign Up
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
            {...register('email', { required: 'Please enter email!', pattern: { value: regex.email, message: 'Invalid email!' } })}
            error={errors.email ? true : false}
          />
          {errors.email && (
            <FormHelperText error id="accountId-error">
              {errors.email.message}
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
                  {showPassword ? <VisibilityOff /> : <Visibility />}
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
        <FormControl size="small" fullWidth sx={{ mb: 2 }}>
          <Button variant="contained" color="primary" type="submit">
            Sign Up
          </Button>
        </FormControl>
      </form>
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
