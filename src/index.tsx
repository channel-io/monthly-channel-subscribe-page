import { BezierProvider, LightFoundation } from '@channel.io/bezier-react'
import ReactDOM from 'react-dom/client'
import MainPage from './components/MainPage/MainPage'
import { GlobalStyle } from './GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BezierProvider foundation={LightFoundation}>
    <GlobalStyle foundation={LightFoundation} />
    <MainPage />
  </BezierProvider>
)
