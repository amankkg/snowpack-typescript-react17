import {StrictMode} from 'react'
import {render} from 'react-dom'

render(
  <StrictMode>
    <span>Hello World!</span>
  </StrictMode>,
  document.querySelector('#root'),
)

if (import.meta.hot) {
  import.meta.hot.accept()
}
