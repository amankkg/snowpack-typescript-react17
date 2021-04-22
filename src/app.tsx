import {useCounter} from './use-counter'

export const App = () => {
  const counter = useCounter(0)

  return (
    <main>
      <p>{counter.value}</p>
      <button onClick={counter.dec}>➖</button>
      <button onClick={counter.inc}>➕</button>
    </main>
  )
}
