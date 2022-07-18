import { StackItem, Text, Typography, VStack } from '@channel.io/bezier-react'

import * as Styled from './MainPage.styled'

function MainPage() {
  return (
    <Styled.Main>
      <Styled.Wrapper>
        <VStack align="center" spacing={12}>
          <StackItem>
            <Styled.H1>월간 채널</Styled.H1>
          </StackItem>
          <StackItem>
            <Text as="p" typo={Typography.Size22} color="txt-black-darker" bold>
              다양한 기술 소식을 공유합니다.
            </Text>
            <Text as="p" typo={Typography.Size22} color="txt-black-darker" bold>
              이메일 구독을 통해 매달 받아볼 수 있습니다.
            </Text>
          </StackItem>
          <StackItem align="stretch" marginBefore={30}>
            form
          </StackItem>
          <StackItem marginBefore={20}>footer</StackItem>
        </VStack>
      </Styled.Wrapper>
    </Styled.Main>
  )
}

export default MainPage
