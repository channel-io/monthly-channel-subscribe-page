import { useCallback, useState } from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  StackItem,
  Text,
  TextField,
  TextFieldType,
  Typography,
} from '@channel.io/bezier-react'

function UserEmailForm() {
  const [userEmail, setUserEmail] = useState('')

  const handleChangeUserEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserEmail(event.target.value)
    },
    [setUserEmail]
  )

  const handleSubmitUserEmail = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      console.log(userEmail)
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
            />
          </FormControl>
        </StackItem>
        <StackItem align="end">
          <Button type="submit" text="월간 채널 구독하기" disabled={userEmail === ''} />
        </StackItem>
      </HStack>
    </form>
  )
}

export default UserEmailForm