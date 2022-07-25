import { useCallback, useState } from 'react'
import {
  Button,
  ButtonColorVariant,
  ButtonSize,
  ButtonStyleVariant,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  StackItem,
  Text,
  TextField,
  TextFieldSize,
  TextFieldType,
  Typography,
} from '@channel.io/bezier-react'
import { registerEmail } from '../api'

function UserEmailForm() {
  const [userEmail, setUserEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChangeUserEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserEmail(event.target.value)
    },
    [setUserEmail]
  )

  const handleSubmitUserEmail = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      registerEmail(userEmail)
        .then(() => {
          alert('구독 신청이 완료되었습니다.')
          setUserEmail('')
          setErrorMessage('')
        })
        .catch(() => {
          setErrorMessage('이메일 등록에 실패했습니다.')
        })
    },
    [userEmail]
  )

  return (
    <form onSubmit={handleSubmitUserEmail}>
      <HStack spacing={12}>
        <StackItem grow shrink weight={1}>
          <FormControl labelPosition="top">
            <FormLabel>
              <Text typo={Typography.Size14} color="txt-black-dark">
                이메일
              </Text>
            </FormLabel>
            <TextField
              type={TextFieldType.Email}
              placeholder="email@example.com"
              value={userEmail}
              onChange={handleChangeUserEmail}
              size={TextFieldSize.L}
              hasError={!!errorMessage}
            />
            {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
          </FormControl>
        </StackItem>
        <StackItem align="end">
          <Button
            type="submit"
            styleVariant={ButtonStyleVariant.Primary}
            colorVariant={ButtonColorVariant.Blue}
            size={ButtonSize.L}
            text="구독하기"
            disabled={userEmail === ''}
          />
        </StackItem>
      </HStack>
    </form>
  )
}

export default UserEmailForm
