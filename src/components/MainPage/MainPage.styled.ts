import { styled } from '@channel.io/bezier-react'

export const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 370px;
  margin: 0 auto;
  padding: 30px;
  ${({ foundation }) => foundation?.rounding.round16}
  ${({ foundation }) => foundation?.elevation.ev3()}
`

export const H1 = styled.h1`
  font-size: 42px;
  margin: 0;
`
