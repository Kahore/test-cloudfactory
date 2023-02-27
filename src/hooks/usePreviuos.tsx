import { useEffect, useRef } from 'react'

export const useHasChanged = <T,>(val: T): boolean => {
  const prevVal = usePrevious(val)
  return prevVal !== val
}

const usePrevious = <T,>(value: T): T | undefined => {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
