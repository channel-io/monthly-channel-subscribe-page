import {
  ArrowRightIcon,
  ChannelBtnSmileFilledIcon,
  Divider,
  HStack,
  Icon,
  IconSize,
  StackItem,
  Text,
  Typography,
} from '@channel.io/bezier-react'

function Footer() {
  return (
    <HStack spacing={8}>
      <StackItem>
        <HStack align="center" spacing={4}>
          <StackItem style={{ display: 'flex', alignItems: 'center' }}>
            <Icon source={ChannelBtnSmileFilledIcon} size={IconSize.XS} color="txt-black-dark" />
          </StackItem>
          <StackItem>
            <a href="https://channel.io/ko/team">
              <Text as="p" typo={Typography.Size14} color="txt-black-dark">
                채널팀 알아보기
              </Text>
            </a>
          </StackItem>
        </HStack>
      </StackItem>
      <StackItem align="stretch">
        <Divider orientation="vertical" withoutSideIndent />
      </StackItem>
      <StackItem>
        <HStack align="center" spacing={4}>
          <StackItem style={{ display: 'flex', alignItems: 'center' }}>
            <Icon source={ArrowRightIcon} size={IconSize.XS} color="txt-black-dark" />
          </StackItem>
          <StackItem>
            <a href="https://github.com/channel-io/monthly-channel">
              <Text as="p" typo={Typography.Size14} color="txt-black-dark">
                월간 채널 둘러보기
              </Text>
            </a>
          </StackItem>
        </HStack>
      </StackItem>
    </HStack>
  )
}

export default Footer
