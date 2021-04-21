import {useCallback, useState} from 'react'

export const App = () => {
  const [x, setX] = useState(0)

  const dec = useCallback(() => setX((v) => v - 1), [setX])
  const inc = useCallback(() => setX((v) => v + 1), [setX])

  return (
    <main>
      <p>{x}</p>
      <button onClick={dec}>➖</button>
      <button onClick={inc}>➕</button>
    </main>
  )
}
