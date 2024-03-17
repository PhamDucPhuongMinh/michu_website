import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import React from 'react'

type Props = {
  length: number
  error?: boolean
  inputWidth?: string | number
  inputHeight?: string | number
  fontSize?: string | number
  onChange?: (value: string | null) => void
}

const pattern = /[0-9]/

const VerifyCodeInput: React.FC<Props> = ({ length, error, inputWidth, inputHeight, fontSize, onChange }) => {
  const handleGetCode = () => {
    let code = ''
    let isValid = true
    Array.from(Array(length).keys()).forEach((item) => {
      const input: HTMLInputElement | null = document.querySelector(`#form-otp input[index-input='${item}']`)
      if (input && input.value !== '') {
        code += input.value
      } else {
        isValid = false
      }
    })
    return isValid ? code : null
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const isKeyDownDelete = e.key === 'Backspace' || e.key === 'Delete'
    const inputValue = (e.target as HTMLInputElement).value
    if (isKeyDownDelete && inputValue === '') {
      const indexInput = Number((e.target as HTMLInputElement).getAttribute('index-input'))
      const inputPrev: HTMLElement | null = document.querySelector(`#form-otp input[index-input='${indexInput - 1}']`)
      if (inputPrev) {
        inputPrev.focus()
      }
    }
  }

  const handleForcus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
    e.target.select()
  }

  const handleInput = (e: React.FormEvent<HTMLDivElement>, inputIndex: number) => {
    const target = e.target as HTMLInputElement
    if (pattern.test(target.value)) {
      if (inputIndex === length) {
        target.blur()
      } else {
        const inputNext: HTMLElement | null = document.querySelector(`#form-otp input[index-input='${inputIndex + 1}']`)
        if (inputNext) {
          inputNext.focus()
        }
      }
      onChange && onChange(handleGetCode())
    } else {
      target.value = ''
      onChange && onChange(null)
    }
  }

  return (
    <Box id="form-otp" sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
      {Array.from(Array(length).keys()).map((item: number) => {
        return (
          <TextField
            key={item}
            sx={{
              width: inputWidth || '50px',
              height: inputHeight || '50px',
              '& .MuiOutlinedInput-root': { height: '100%' },
              '& .MuiOutlinedInput-input': { textAlign: 'center', fontSize: fontSize || '20px' }
            }}
            // onChange={handleChange}
            onInput={(e) => handleInput(e, item)}
            onKeyDown={handleKeyDown}
            onFocus={handleForcus}
            error={error}
            inputProps={{ maxLength: 1, ['index-input']: item }}
          />
        )
      })}
    </Box>
  )
}

export default VerifyCodeInput
