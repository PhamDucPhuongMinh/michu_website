import AuthFormContainer from '@/components/AuthFormContainer'
import Box from '@mui/material/Box'
import WelcomeImage from '@/assets/welcome.png'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import Button from '@mui/material/Button'
import Link from '@/components/Link'
import { SubmitHandler, useForm } from 'react-hook-form'
import FormHelperText from '@mui/material/FormHelperText'
import { regex } from '@/utils'

type ForgotPasswordFormType = {
  email: string
}

function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotPasswordFormType>()

  const onSubmit: SubmitHandler<ForgotPasswordFormType> = (data) => console.log(data)
  return (
    <AuthFormContainer>
      <Box sx={{ mb: 3 }}>
        <img src={WelcomeImage} alt="" width={'100%'} />
      </Box>
      <Typography variant="h5" fontWeight={700} align="center" sx={{ mb: 3 }}>
        Forgot password
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Typography variant="body2" sx={{ mb: 2, color: 'grey.600' }}>
          Enter your email address below, and we'll send an OTP to your email to verify.
        </Typography>
        <FormControl size="small" fullWidth sx={{ mb: 1 }}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </FormControl>
      </form>
      <Box sx={{ textAlign: 'center' }}>
        <Link href="/login" variant="body2" sx={{ mx: 'auto', fontWeight: 500 }}>
          Back to Login
        </Link>
      </Box>
    </AuthFormContainer>
  )
}

export default ForgotPasswordPage
