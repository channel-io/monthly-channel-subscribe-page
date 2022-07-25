import { HStack, StackItem, Text, Typography, VStack } from '@channel.io/bezier-react'

import { ChSymbolPush } from '../../assets'
import UserEmailForm from '../UserEmailForm'
import Footer from '../Footer'
import * as Styled from './MainPage.styled'

function MainPage() {
  return (
    <Styled.Main>
      <Styled.Wrapper>
        <VStack align="center" spacing={40}>
          <StackItem>
            <VStack spacing={20} align="center">
              <StackItem>
                <HStack spacing={12} align="center">
                  <StackItem>
                    <Styled.H1>월간 채널</Styled.H1>
                  </StackItem>
                  <StackItem>
                    <img src={ChSymbolPush} width={42} />
                  </StackItem>
                </HStack>
              </StackItem>
              <StackItem>
                <Text as="p" typo={Typography.Size22} color="txt-black-darker" bold>
                  다양한 기술 소식을 공유합니다.
                </Text>
                <Text as="p" typo={Typography.Size22} color="txt-black-darker" bold>
                  이메일 구독을 통해 매달 받아볼 수 있습니다.
                </Text>
              </StackItem>
            </VStack>
          </StackItem>
          <StackItem align="stretch">
            <UserEmailForm />
          </StackItem>
          <StackItem>
            <Footer />
          </StackItem>
        </VStack>
      </Styled.Wrapper>
    </Styled.Main>
  )
}

export default MainPage
