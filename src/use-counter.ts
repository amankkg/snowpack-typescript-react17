import {useCallback, useState} from 'react'

export const useCounter = (init = 0) => {
  const [value, setValue] = useState(0)

  const dec = useCallback(() => setValue((v) => v - 1), [setValue])
  const inc = useCallback(() => setValue((v) => v + 1), [setValue])

  return {value, dec, inc}
}
