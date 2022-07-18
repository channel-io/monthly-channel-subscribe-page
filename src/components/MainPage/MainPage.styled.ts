import { styled } from '@channel.io/bezier-react'

export const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    170deg,
    ${({ foundation }) => foundation?.theme['bgtxt-navy-lighter']},
    ${({ foundation }) => foundation?.theme['bgtxt-navy-light']} 20%,
    ${({ foundation }) => foundation?.theme['bgtxt-navy-normal']} 80%,
    ${({ foundation }) => foundation?.theme['bgtxt-navy-dark']} 95%
  );
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 370px;
  margin: 0 auto;
  padding: 40px;
  ${({ foundation }) => foundation?.rounding.round16}
  ${({ foundation }) => foundation?.elevation.ev4()}}
`

export const H1 = styled.h1`
  font-size: 38px;
`
