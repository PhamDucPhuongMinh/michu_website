import { useEffect, useState } from 'react'
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
import VerifyCodeInput from '@/components/VerifyCodeInput'

type ForgotPasswordFormType = {
  email: string
}

function ForgotPasswordPage() {
  const lengthVerifyCode = 4
  const [emailSendCode, setEmailSendCode] = useState<string>('')
  const [code, setCode] = useState<string | null>(null)
  const [isValidCodeForm, setIsValidCodeForm] = useState<boolean>(true)
  const [timeoutResendCode, setTimeoutResendCode] = useState<number | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotPasswordFormType>()

  const handleSubmitEmail: SubmitHandler<ForgotPasswordFormType> = (data) => {
    setEmailSendCode(data.email)
    setTimeoutResendCode(5)
  }

  const handleVerifyCodeChange = (value: string | null) => {
    setCode(value)
    if (value && !isValidCodeForm) {
      setIsValidCodeForm(true)
    }
  }

  const handleSubmitVerifyCode = () => {
    if (code && code.length === lengthVerifyCode) {
      console.log(code)
    } else {
      setIsValidCodeForm(false)
    }
  }

  useEffect(() => {
    if (emailSendCode === '') {
      setTimeoutResendCode(null)
      !isValidCodeForm && setIsValidCodeForm(true)
    }
  }, [emailSendCode, isValidCodeForm])

  useEffect(() => {
    timeoutResendCode &&
      setTimeout(() => {
        setTimeoutResendCode(timeoutResendCode === 0 ? null : timeoutResendCode - 1)
      }, 1000)
  }, [timeoutResendCode])

  return (
    <AuthFormContainer>
      <Box sx={{ mb: 3 }}>
        <img src={WelcomeImage} alt="" width={'100%'} />
      </Box>
      <Typography variant="h5" fontWeight={700} align="center" sx={{ mb: 3 }}>
        {emailSendCode === '' ? 'Forgot password' : 'Verification code'}
      </Typography>
      {emailSendCode !== '' && (
        <Typography variant="body1" align="center" sx={{ mb: 1 }}>
          Enter the OTP code sent to your email
        </Typography>
      )}
      {emailSendCode === '' ? (
        <form onSubmit={handleSubmit(handleSubmitEmail)}>
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
          <Box sx={{ textAlign: 'center' }}>
            <Link href="/login" variant="body2" sx={{ mx: 'auto', fontWeight: 500 }}>
              Back to Login
            </Link>
          </Box>
        </form>
      ) : (
        <>
          <VerifyCodeInput length={lengthVerifyCode} error={!isValidCodeForm} onChange={handleVerifyCodeChange} />
          {!isValidCodeForm && (
            <Typography variant="body2" color="error.main" sx={{ mt: 1, textAlign: 'center' }}>
              Please enter the verify code!
            </Typography>
          )}
          {emailSendCode !== '' && (
            <Typography
              variant="body2"
              sx={{
                textAlign: 'right',
                mt: 2,
                '&:hover': !timeoutResendCode
                  ? {
                      textDecoration: 'underline',
                      cursor: 'pointer'
                    }
                  : {
                      cursor: 'not-allowed'
                    }
              }}
              color="primary"
              onClick={() => handleSubmitEmail({ email: emailSendCode })}
            >
              <Typography component="span" variant="body2">
                Resend OTP
              </Typography>
              {!!timeoutResendCode && (
                <Typography component="span" variant="body2">
                  &nbsp;in {timeoutResendCode}s
                </Typography>
              )}
            </Typography>
          )}
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Button variant="contained" sx={{ width: '100%' }} onClick={handleSubmitVerifyCode}>
              Verify
            </Button>
            <Button variant="contained" sx={{ width: '100%', mt: 1 }} color="secondary" onClick={() => setEmailSendCode('')}>
              Cancel
            </Button>
          </Box>
        </>
      )}
    </AuthFormContainer>
  )
}

export default ForgotPasswordPage
