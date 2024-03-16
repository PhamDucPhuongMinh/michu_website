import React, { PropsWithChildren, ReactNode } from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import { styled, useColorScheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const PageContainer = styled(Box)<BoxProps>(() => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const FormContainer = styled(Box)<BoxProps>(({ theme }) => ({
  maxWidth: theme.app.authFormMaxWidth,
  width: '100%',
  borderRadius: '2px'
}))

type Props = {
  children: PropsWithChildren<ReactNode>
}

const AuthFormContainer: React.FC<Props> = ({ children }) => {
  const { mode } = useColorScheme()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  return (
    <PageContainer sx={{ bgcolor: 'primary.main', padding: 6 }}>
      <FormContainer
        style={{ background: mode === 'dark' || (mode === 'system' && prefersDarkMode) ? '#000' : '#fff' }}
        sx={{ boxShadow: 5, padding: 4 }}
      >
        {children}
      </FormContainer>
    </PageContainer>
  )
}

export default AuthFormContainer
