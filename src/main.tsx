import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './global.scss'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // 모든 컴포넌트들이 App 컴포넌트들에 모이므로
  // Provider를 App컴포넌트에 감싼뒤, store를 속성으로 주면
  // 모든 컴포넌트들이 ReduxStore에 있는 값들을 사용할 수 있게 된다.
  <Provider store={store}>
    <App />
  </Provider>,
)
