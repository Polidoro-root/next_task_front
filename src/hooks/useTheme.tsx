import { useState } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  return { theme, setTheme }
}
